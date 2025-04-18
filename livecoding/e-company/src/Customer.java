/**
 * 
 * Create by ESP Asian Center Co., Ltd.
 *
 */

public class Customer {

	private int cash_1THB;
	private int cash_5THB;
	private int cash_10THB;
	
	public Customer() {
		this.cash_1THB  = 0;
		this.cash_5THB  = 0;
		this.cash_10THB = 0;
	}

	public int getCash_1THB() {
		return cash_1THB;
	}
	public int getCash_5THB() {
		return cash_5THB;
	}
	public int getCash_10THB() {
		return cash_10THB;
	}
	public void setCash_1THB(int cash_1thb) {
		cash_1THB = cash_1thb;
	}
	public void setCash_5THB(int cash_5thb) {
		cash_5THB = cash_5thb;
	}
	public void setCash_10THB(int cash_10thb) {
		cash_10THB = cash_10thb;
	}
	
	public void insertCash(int cashType, int count) {
		// Write your code here
		if(cashType == Constants.CURRENCY_1THB) {
			setCash_1THB(getCash_1THB() + count);
		} else if(cashType == Constants.CURRENCY_5THB) {
			setCash_5THB(getCash_5THB() + count);
		} else if(cashType == Constants.CURRENCY_10THB) {
			setCash_10THB(getCash_10THB() + count);
		} else {
			System.out.print(Constants.MESSAGE_ERROR_OTHER_COINS);
		}
	}
	
	public double getTotalBalance() {
		// Write your code here	
		return getCash_1THB() + getCash_5THB() * 5 + getCash_10THB() * 10;
	}
	
	public void printStatus() {
		System.out.print(Constants.MESSAGE_INFO_USER_STATUS);
		this.printBalance();
	}
	
	private void printBalance() {
		System.out.printf(Constants.MESSAGE_INFO_BALANCE, getTotalBalance());
		if(getCash_10THB() > 0) System.out.printf(Constants.MESSAGE_INFO_10THB, getCash_10THB());
		if(getCash_5THB() > 0)  System.out.printf(Constants.MESSAGE_INFO_5THB, getCash_5THB());
		if(getCash_1THB() > 0)  System.out.printf(Constants.MESSAGE_INFO_1THB, getCash_1THB());
		System.out.print(Constants.LINE_FEED);
	}
	
	// Do not modify this method.
	public static void main(String[] args) {
		VendingMachine snackMachine = new VendingMachine(10, 5, 1); //Now, snackMachine has a cash total of ONE x 10, FIVE x 5, and TEN x 1 (45 THB).
		
		//Adding stock to the machine.
		snackMachine.addStock("A01", new Supply("Potato Chips", 28, 5)); //Administrator add new supply
		snackMachine.addStock("A02", new Supply("Cookies", 17, 1)); //Administrator add new supply
		snackMachine.updateStock("A02", 3);	//Administrator update stock
		snackMachine.printStatus();
		
		//Create new user
		Customer user1 = new Customer();
		user1.insertCash(Constants.CURRENCY_10THB, 2);		//Now, user1 has a cash total of TEN  x 2 (20 THB).
		user1.insertCash(Constants.CURRENCY_5THB, 1);		//Now, user1 has a cash total of FIVE x 1, TEN  x 2 (25 THB).
		user1.insertCash(Constants.CURRENCY_1THB, 2);	 	//Now, user1 has a cash total of ONE  X 2, FIVE x 1, TEN x 2 (27 THB).
		user1.printStatus();
		
		//Buy the Potato Chips
		snackMachine.vending(user1, "A01");					//user1 buy potato chips but not success (need more 1 THB).
		user1.insertCash(Constants.CURRENCY_5THB, 1);		//Now, user1 has a cash total of ONE x 2, FIVE x 2, and TEN x 2 (32 THB).
		user1.printStatus();
		snackMachine.vending(user1, "A01");					//user1 buy potato chips and have a cash total change of ONE x 4 (4 THB).
		snackMachine.printStatus();							//Now, snackMachine has a cash total of ONE x 8, FIVE x 7, and TEN x 3 (73 THB).
		user1.printStatus();								//Now, user1 has a cash total of ONE x 4 (4 THB).
	}

}
