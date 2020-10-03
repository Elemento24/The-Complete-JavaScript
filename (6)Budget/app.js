// BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0)
      this.percentage = Math.round((this.value / totalIncome) * 100);
    else
      this.percentage = -1;
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  var addItem = function (type, des, val) {
    var newItem, ID;

    // If we assume the ID, to be the length of the array, then when we will start deleting the items, it might happen, that the same ID occurs twice. So, we will calculate the ID of the next element as the ID of the last element + 1.

    // Create new ID
    if (data.allItems[type].length > 0)
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
    else
      ID = 0;

    // Create new ITEM based on 'inc' or 'exp'
    if (type === 'exp') {
      newItem = new Expense(ID, des, val);
    } else if (type === 'inc') {
      newItem = new Income(ID, des, val);
    }

    // Push it into the Data Structure
    data.allItems[type].push(newItem);

    // Return the new Element
    return newItem;
  };

  var deleteItem = function (type, id) {
    // id = 6;
    // ids = [1 2 4 6 8]
    // index = 3;

    var ids, index;

    // This is done to get an array of all the IDs
    ids = data.allItems[type].map(function (current) {
      return current.id;
    });

    index = ids.indexOf(id);
    if (index !== -1) {
      data.allItems[type].splice(index, 1);
    }
  };

  var calculateBudget = function () {
    // Calculate Total Income & Expenses
    calculateTotal('exp');
    calculateTotal('inc');

    // Calculate the Budget: Income - Expenses
    data.budget = data.totals.inc - data.totals.exp;

    // Calculate the Percentage of Income that we spent
    if (data.totals.inc > 0)
      data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
    else
      data.percentage = -1;
  };

  var calculatePercentages = function () {
    data.allItems.exp.forEach(function (cur) {
      cur.calcPercentage(data.totals.inc);
    });
  };

  var getPercentages = function () {
    return data.allItems.exp.map(function (cur) {
      return cur.getPercentage();
    });
  }

  var getBudget = function () {
    return {
      budget: data.budget,
      totalInc: data.totals.inc,
      totalExp: data.totals.exp,
      percentage: data.percentage
    }
  };

  var testing = function () {
    console.log(data);
  };

  return {
    addItem,
    deleteItem,
    calculateBudget,
    calculatePercentages,
    getPercentages,
    getBudget,
    testing
  };

})();

// UI CONTROLLER
var UIContoller = (function () {

  var DOMstrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  }

  var getInput = function () {
    return {
      type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
      description: document.querySelector(DOMstrings.inputDesc).value,
      value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
    };
  };

  var addListItem = function (obj, type) {
    var html, newHtml, element;

    // Create HTML String with Placeholder Text
    if (type === 'inc') {
      element = DOMstrings.incomeContainer;
      html = `<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
    } else if (type === 'exp') {
      element = DOMstrings.expensesContainer;
      html = `<div class="item clearfix" id="exp-%id%" ><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >`;
    }

    // Replace the Placeholder Text with some Actual Data
    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%description%', obj.description);
    newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

    // Insert HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
  };

  var deleteListItem = function (selectorID) {
    var el = document.getElementById(selectorID);
    el.parentNode.removeChild(el);
  };

  var clearFields = function () {
    var fields, fieldsArr;

    fields = document.querySelectorAll(`${DOMstrings.inputValue}, ${DOMstrings.inputDesc}`);

    // The slice method basically gives us a copy of the array, on which it is called. We use the call method with the slice method, and pass our nodeList as the value of 'this' variable, thereby tricking the slice method into believing that we have passed an array to it. We don't need to do this any more, cause forEach method is now available for nodeLists as well.
    // fieldsArr = Array.prototype.slice.call(fields);

    fields.forEach(function (current, index, array) {
      current.value = '';
    });
    fields[0].focus();

  };

  var displayBudget = function (obj) {
    var type;
    obj.budget > 0 ? type = 'inc' : type = 'exp';

    document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
    document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
    document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

    if (obj.percentage > 0)
      document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
    else
      document.querySelector(DOMstrings.percentageLabel).textContent = '---';
  };

  var displayPercentages = function (percentages) {

    // This is the work-around when forEach was not applicable to Node Lists
    // var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
    // var nodeListsForEach = function (list, callback) {
    //   for (var i = 0; i < list.length; i++) {
    //     callback(list[i], i);
    //   }
    // };
    // nodeListsForEach(fields, function (current, index) {
    //   if (percentages[index > 0])
    //     current.textContent = percentages[index] + '%';
    //   else
    //     current.textContent = '---';
    // });

    document.querySelectorAll(DOMstrings.expensesPercLabel).forEach(function (cur, ind) {
      if (percentages[ind] > 0)
        cur.textContent = percentages[ind] + '%';
      else
        cur.textContent = '---';
      console.log('Hi');
    });
  };

  var displayMonth = function () {
    // var chrs = new Date(2016, 11, 25);

    var now, year, month, months;
    now = new Date();

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();

    year = now.getFullYear();
    document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]}, ${year}`;
  };

  var formatNumber = function (num, type) {
    // + or -, before the number
    // Exactly 2 Decimal Points
    // Comma Separated Numbers
    // 2310.457 -> + 2,310.46

    var numSplit, int, dec;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3)
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  var changedType = function () {
    document.querySelectorAll(`${DOMstrings.inputType},${DOMstrings.inputDesc},${DOMstrings.inputValue}`).forEach(function (cur) {
      cur.classList.toggle('red-focus');
    });
    document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
  };

  var getDOMstrings = function () {
    return DOMstrings;
  };

  return {
    getInput,
    addListItem,
    deleteListItem,
    clearFields,
    displayBudget,
    displayPercentages,
    displayMonth,
    changedType,
    getDOMstrings
  };

})();

// GLOBAL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputType).value = 'inc';
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
  };

  var updateBudget = function () {

    // Calculate the Budget
    budgetCtrl.calculateBudget();

    // Return the Budget
    var budget = budgetCtrl.getBudget();

    // Display the Budget on the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function () {
    // Calculate the Percentages
    budgetCtrl.calculatePercentages();

    // Read percentages from the Budget Controller
    var percentages = budgetCtrl.getPercentages();

    // Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  var ctrlAddItem = function () {
    var input, newItem;

    // Get the Field Input Data
    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Add the Item to the Budget Controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      // Add the item to the UI
      UICtrl.addListItem(newItem, input.type);
      // Clear the Fields
      UICtrl.clearFields();
      // Calculate & Update Budget
      updateBudget();
      // Calculate and Update Percentages
      updatePercentages();
    }


  };

  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      // inc-1 or exp-1
      splitID = itemID.split('-');
      type = splitID[0];
      ID = splitID[1];

      // Delete the Item from the Data Structure
      budgetCtrl.deleteItem(type, Number(ID));

      // Delete the Item from the UI
      UICtrl.deleteListItem(itemID);

      // Update and show the New Budget
      updateBudget();

      // Calculate and Update Percentages
      updatePercentages();
    }

  };

  return {
    init: function () {
      console.log('Application has Started!');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };

})(budgetController, UIContoller);

controller.init();