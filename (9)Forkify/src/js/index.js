import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';

/*
  GLOBAL STATE OF THE APP
  -> Search Object
  -> Current Recipe Object
  -> Shopping List Object
  -> Liked Recipes
*/

const state = {};

// ===================
// SEARCH CONTROLLER
// ===================

const controlSearch = async () => {
  // 1) Get Query form the View
  const query = searchView.getInput();

  if (query) {
    // 2) New search object & add it to the state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchResults);

    try {
      // 4) Search for Recipes
      await state.search.getResults();

      // 5) Render results on the UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      console.log(error);
      clearLoader();
      alert('Something went wrong!');
    }

  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline')
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// ===================
// RECIPE CONTROLLER
// ===================

const controlRecipe = async () => {
  // Get ID from URL
  const id = window.location.hash.replace('#', '');

  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highlight the selected Search Item
    if (state.search) searchView.highlightSelected(id);

    // Create new Recipe Object
    state.recipe = new Recipe(id);

    try {
      // Get Recipe Data & Parse Ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate Servings and Time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render Recipe
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
      );

    } catch (error) {
      console.log(error);
      alert('Error Processing Recipe');
    }
  }
};

// Adding the same function to different events on the same Object.
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// ===================
// LIST CONTROLLER
// ===================

const controlList = () => {
  // Create a new List IF there is none yet
  if (!state.list) state.list = new List();

  // Add Each ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// Handle delete and Update List Item Events
elements.shopping.addEventListener('click', e => {
  const id = e.target.closest('.shopping__item').dataset.itemid;

  // Handle the Delete Button
  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    // Delete from State
    state.list.deleteItem(id);

    // Delete from UI
    listView.deleteItem(id);
  }
  // Handle the count Update 
  else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

// ===================
// LIKES CONTROLLER
// ===================

const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
  const currentID = state.recipe.id;

  // User has not yet liked the Current Recipe
  if (!state.likes.isLiked(currentID)) {
    // Add like to the state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );

    // Toggle the Like Button
    likesView.toggleLikedBtn(true);

    // Add like to UI List
    likesView.renderLike(newLike);
  }

  // User has liked the Current Recipe 
  else {
    // Remove like from the state
    state.likes.deleteLike(currentID);

    // Toggle the Like Button
    likesView.toggleLikedBtn(false);

    // Remove like from UI List
    likesView.deleteLike(currentID);
  }

  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on Page Load
window.addEventListener('load', () => {
  state.likes = new Likes();

  // Restore the Likes
  state.likes.readStorage();

  // Toggle like Menu Button
  likesView.toggleLikeMenu(state.likes.getNumLikes());

  // Render the Existing liked recipes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling Recipe Button Clicks
elements.recipe.addEventListener('click', e => {
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {

    // Decrease button is Clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }

  } else if (e.target.matches('.btn-increase, .btn-increase *')) {

    // Increase button is Clicked
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);

  } else if (e.target.matches('recipe__btn--add, .recipe__btn--add *')) {

    // Add Ingredients to Shopping List
    controlList();

  } else if (e.target.matches('.recipe__love, .recipe__love *')) {

    // Like Controller
    controlLike();

  }
});