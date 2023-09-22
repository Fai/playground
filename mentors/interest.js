/**
 * Write a program that 
 */

const calculateInterests = (principal, interestRate, year) => {
  /**
   * Calculates the amount of interest earned on a bank account given the principal, interest rate, and time.
   * Principal is the amount of money deposited in the bank account.
   * Interest Rate is the percentage of the principal that is earned as interest each year.
   * Time is the number of years that the money is deposited in the bank account.
   */
  return Math.round(principal * (interestRate * 0.01) * (year)); 
};

const calculateCompoundInterests = (principal, interestRate, year) => {
  /**
   * calculates the amount of compound interest earned on a bank account given the principal, interest rate, and time.
   * Future Value is the amount of money in the account at the end of the period.
   * Principal is the amount of money deposited in the account at the beginning of the period.
   * Interest Rate is the percentage of the principal that is earned as interest each year.
   * Time is the number of years that the money is invested.
   */
  const futureValue = Math.round(principal * (1 + (interestRate * 0.01)) ** year);
  return futureValue - principal;
};

// test
const myPrincipal = 1000;
const myInterest = 5;
const myTime = 10;

console.log(calculateInterests(myPrincipal,myInterest,myTime));
console.log(calculateCompoundInterests(myPrincipal,myInterest,myTime));