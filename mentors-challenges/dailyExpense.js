/**
 * You'd like to keep a record of your daily expenses to better understand your spending habits.
 * Develop a program that logs daily expenses and categorizes them (e.g., Food, Transport, Entertainment).
 * Create a feature in the above program that provides a weekly or monthly report on spending per category.
 */

const myExpense = [];

const addExpense = (expenseLog, amount, category, date) => {
  const newTransaction = {
    amount: amount,
    category: category,
    date: new Date(date),
  }
  expenseLog.push(newTransaction);
}

addExpense(myExpense, 300, 'game', '08-08-2023');
addExpense(myExpense, 400, 'food', '08-30-2023');
addExpense(myExpense, 400, 'food', '09-09-2023');
addExpense(myExpense, 800, 'game', '09-10-2023');
addExpense(myExpense, 200, 'food', '09-11-2023');
console.log(myExpense);

const getWeekNumber = (date) => {
  date.setHours(0,0,0);
  date.setDate(date.getDate()+4-(date.getDay()||7));
  return Math.ceil((((date-new Date(date.getFullYear(),0,1))/8.64e7)+1)/7);
}

const weeklySpendingByCategory = (expenseLog) => {
  
  const weeklyExpense = [];
  
  for (let transaction of expenseLog) {
    const category = transaction.category;
    const transactionWeek = `Week ${getWeekNumber(transaction.date)}`;
    if (!weeklyExpense[transactionWeek]) {
      weeklyExpense[transactionWeek] = {};
    } 
    if (!weeklyExpense[transactionWeek][category]) {
      weeklyExpense[transactionWeek][category] = 0;
    }
    weeklyExpense[transactionWeek][category] += transaction.amount;
  }
  console.log(weeklyExpense);
  return weeklyExpense;
}

weeklySpendingByCategory(myExpense);

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const monthlySpendingByCategory = (expenseLog) => {
  const monthlyExpense = [];

  for (let transaction of expenseLog) {
    const category = transaction.category;
    const transactionMonth = month[transaction.date.getMonth()];
    if (!monthlyExpense[transactionMonth]) {
      monthlyExpense[transactionMonth] = {};
    } 
    if (!monthlyExpense[transactionMonth][category]) {
      monthlyExpense[transactionMonth][category] = 0;
    }
    monthlyExpense[transactionMonth][category] += transaction.amount;
  }
  return monthlyExpense;
}

console.log(monthlySpendingByCategory(myExpense));