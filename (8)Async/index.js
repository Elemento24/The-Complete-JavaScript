// ==============
// FIRST LECTURE
// ==============

// const second = () => {
//   setTimeout(() => {
//     console.log('Async Hey There!');
//   }, 2000);
// };
// const first = () => {
//   console.log('Hey There!');
//   second();
//   console.log('The End');
// };
// first();


// ==============
// SECOND LECTURE
// ==============

// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     console.log(recipeID);

//     setTimeout(id => {
//       const recipe = {
//         title: 'Fresh Tomato Pasta',
//         publisher: 'Jonas'
//       };
//       console.log(`${id}: ${recipe.title}`);

//       setTimeout(publisher => {
//         const recipe2 = {
//           title: 'Italian Pizza',
//           publisher
//         };
//         console.log(recipe2);
//       }, 1500, recipe.publisher)
//     }, 1500, recipeID[2]);

//   }, 1500);
// };
// getRecipe();

// ==============
// THIRD LECTURE
// ==============

// const getIDs = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([523, 883, 432, 974]);
//   }, 1500);
// });

// const getRecipe = recID => {
//   return new Promise((resolve, reject) => {
//     setTimeout(id => {
//       const recipe = {
//         title: 'Fresh Tomato Pasta',
//         publisher: 'Jonas'
//       };
//       resolve(recipe);
//     }, 1500, recID);
//   });
// };

// const getRelated = pub => {
//   return new Promise((resolve, reject) => {
//     setTimeout(publisher => {
//       const recipe2 = {
//         title: 'Italian Pizza',
//         publisher
//       };
//       resolve(recipe2);
//     }, 1500, pub);
//   })
// };

// getIDs.
//   then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then(recipe => {
//     console.log(recipe);
//     return getRelated(recipe.publisher);
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// ==============
// FOURTH LECTURE
// ==============

// // Must note the fact that the await keyword can only be used inside a Async Function
// async function getRecipesAW() {
//   const IDs = await getIDs;
//   console.log(IDs);
//   const recipe1 = await getRecipe(IDs[2]);
//   console.log(recipe1);
//   const recipe2 = await getRelated(recipe1.publisher);
//   console.log(recipe2);

//   return recipe1;
// };
// getRecipesAW().then(result => console.log(`${result.title} is the best ever!`));

// ==============
// FIFTH LECTURE
// ==============

function getWeather(woeid) {
  fetch(`https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
      // console.log(result);
      return result.json();
    })
    .then(data => {
      // console.log(data);
      const today = data.consolidated_weather[0];
      console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => {
      console.log(error);
    });
};
getWeather(44418);

// ==============
// SIXTH LECTURE
// ==============

async function getWeatherAW(woeid) {
  try {
    const result = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
    const data = await result.json();
    const tomorrow = data.consolidated_weather[1];
    console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
getWeatherAW(44418).
  then(data => {
    console.log(data);
  })
