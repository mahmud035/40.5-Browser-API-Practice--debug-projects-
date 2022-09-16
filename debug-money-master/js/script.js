const calculateExpense = () => {
  const income = document.querySelector('#income').value;
  const food = document.querySelector('#food').value;
  const rent = document.querySelector('#rent').value;
  const clothes = document.querySelector('#clothes').value;
  console.log(income, rent, food, clothes);

  if (
    income < 0 ||
    income == '' ||
    food < 0 ||
    food == '' ||
    rent < 0 ||
    rent == '' ||
    clothes < 0 ||
    clothes == ''
  ) {
    alert('Inputs must be positive numbers');
    return;
  } else if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    alert('Inputs must be an Integer');
    return;
  }
  // calculate expense
  const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);
  // const expense = Number(food) + Number(rent) + Number(clothes);
  // console.log(expense);

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert('Expenses cannot be more than income');
    return;
  } else {
    // view total expense and balance
    document.getElementById('total-expense').innerText = expense;
    document.getElementById('balance').innerText = balance;
  }
};

const calculateSavings = () => {
  const income = document.querySelector('#income').value;
  // calculate saving amount
  const savePercentage = document.getElementById('save').value;
  console.log(savePercentage);
  //   Validate saving percentage value
  if (savePercentage < 0 || isNaN(savePercentage)) {
    alert('Provide positive saving value');
    return;
  }
  const savingAmount = parseInt(income) * (parseFloat(savePercentage) / 100);

  // calculate remaining balance
  const balance = document.getElementById('balance').innerText;
  const remainingBalance = parseInt(balance) - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert('SavingAmount is greater than Balance');
    return;
  } else {
    // view saving amount and remaining balance
    document.getElementById('saving-amount').innerText =
      savingAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText =
      remainingBalance.toFixed(2);
  }
};
