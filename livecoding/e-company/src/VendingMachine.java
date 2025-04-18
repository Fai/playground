/**
 * 
 * Create by ESP Asian Center Co., Ltd.
 *
 */

import java.util.HashMap;

public class VendingMachine implements VendingMachineIF{

	private int balance_1THB;
	private int balance_5THB;
	private int balance_10THB;
	
	private HashMap<String, Supply> supplies = new HashMap<String, Supply>();
	
	public VendingMachine(int cash_1THB, int cash_5THB, int cash_10THB) {
		this.balance_1THB  = cash_1THB;
		this.balance_5THB  = cash_5THB;
		this.balance_10THB = cash_10THB;
	}
	
	public HashMap<String, Supply> getSupplies() {
		return supplies;
	}
	public int getBalance_1THB() {
		// Write getter here
		return balance_1THB;
	}
	public int getBalance_5THB() {
		// Write getter here
		return balance_5THB;
	}
	public int getBalance_10THB() {
		// Write getter here
		return balance_10THB;
	}

	public void setBalance_1THB(int balance_1thb) {
		balance_1THB = balance_1thb;
	}
	public void setBalance_5THB(int balance_5thb) {
		balance_5THB = balance_5thb;
	}
	public void setBalance_10THB(int balance_10thb) {
		balance_10THB = balance_10thb;
	}
	
	@Override
	public double getTotalBalance() {
		// Write your code here
		return getBalance_1THB() + getBalance_5THB() * 5 + getBalance_10THB() * 10;
	}
	
	@Override
	public void addStock(String code, Supply arg) {
		// Write your code here
		supplies.put(code, arg);
	}
	
	@Override
	public void updateStock(String code, int amount) {
		// Write your code here
		Supply updateSupply = supplies.get(code);
		updateSupply.addAmount(amount);
		supplies.put(code, updateSupply);
	}
	
	@Override
	public void vending(Customer user, String code) {
		System.out.println(Constants.MESSAGE_INFO_ORDER_STATUS);
		// Write your code here
		Supply orderedSupply = supplies.get(code);
		// check if vending machine have exist item
		if(orderedSupply == null) {
			System.out.printf(Constants.MESSAGE_ERROR_NO_PRODUCT, code);
		} else if(orderedSupply.getAmount() < 0) {
			// check if vending machine have item in stock
			System.out.println(Constants.MESSAGE_INFO_ORDER);
			System.out.printf(Constants.MESSAGE_ERROR_OUT_OF_STOCK, orderedSupply.getTitle());
		} else if(user.getTotalBalance() < orderedSupply.getPrice()) {
			// check if customer have enough money
			System.out.println(Constants.MESSAGE_INFO_ORDER);
			System.out.printf(Constants.MESSAGE_ERROR_MONEY_NOT_ENOUGH, orderedSupply.getPrice() - user.getTotalBalance());
		} else if (getTotalBalance() < user.getTotalBalance() - orderedSupply.getPrice()) {
			// check if vending machine have enough change
			System.out.println(Constants.MESSAGE_INFO_ORDER);
			System.out.println(Constants.MESSAGE_ERROR_NO_CHANGE);
		} else {
			double totalChange = user.getTotalBalance() - orderedSupply.getPrice();
			// calculate change coins
			int change_10THB = (int) (totalChange / 10);
			if(change_10THB > getBalance_10THB()) {
				change_10THB = getBalance_10THB();
			}
			totalChange -= change_10THB * 10;
			int change_5THB = (int) (totalChange / 5);
			if(change_5THB > getBalance_5THB()) {
				change_5THB = getBalance_5THB();
			}
			totalChange -= change_5THB * 5;
			int change_1THB = (int) (totalChange / 1);
			if(change_1THB > getBalance_1THB()) {
				change_1THB = getBalance_1THB();
			}
			totalChange -= change_1THB * 1;
			// if vending machine have enough coin change to return to customer
			if (totalChange > 0) {
				System.out.println(Constants.MESSAGE_INFO_ORDER);
				System.out.println(Constants.MESSAGE_ERROR_NO_CHANGE);
			} else {
				// update coins with customer payment
				setBalance_10THB(getBalance_10THB() + user.getCash_10THB());
				setBalance_5THB(getBalance_5THB() + user.getCash_5THB());
				setBalance_1THB(getBalance_1THB() + user.getCash_1THB());
				user.setCash_10THB(0);
				user.setCash_5THB(0);
				user.setCash_1THB(0);
				// update stock
				orderedSupply.sold();
				supplies.put(code, orderedSupply);
				// update change coins
				user.setCash_10THB(change_10THB);
				user.setCash_5THB(change_5THB);
				user.setCash_1THB(change_1THB);
				setBalance_10THB(getBalance_10THB() - change_10THB);
				setBalance_5THB(getBalance_5THB() - change_5THB);
				setBalance_1THB(getBalance_1THB() - change_1THB);
				// print receipt
				System.out.println(Constants.MESSAGE_INFO_ORDER);
				printChange(totalChange, change_10THB, change_5THB, change_1THB);
			}
		}
	}
	
	@Override
	public void printStatus() {
		System.out.print(Constants.MESSAGE_INFO_MACHINE_STATUS);
		this.printSupplies();
		this.printBalance();
	}
	
	private void printSupplies() {
		HashMap<String, Supply> supplies = getSupplies();
		for (String code : supplies.keySet()) {
			System.out.printf(Constants.MESSAGE_INFO_CODE, code);
			Supply supply = supplies.get(code);
			System.out.printf(Constants.MESSAGE_INFO_TITLE, supply.getTitle());
			System.out.printf(Constants.MESSAGE_INFO_PRICE, supply.getPrice());
			System.out.printf(Constants.MESSAGE_INFO_AMOUNT, supply.getAmount());
		}
	}
	
	private void printBalance() {
		System.out.printf(Constants.MESSAGE_INFO_BALANCE, getTotalBalance());
		if(getBalance_10THB() > 0) System.out.printf(Constants.MESSAGE_INFO_10THB, getBalance_10THB());
		if(getBalance_5THB() > 0)  System.out.printf(Constants.MESSAGE_INFO_5THB, getBalance_5THB());
		if(getBalance_1THB() > 0)  System.out.printf(Constants.MESSAGE_INFO_1THB, getBalance_1THB());
		System.out.print(Constants.LINE_FEED);
	}
	
	private void printChange(double totalChange, int change_10THB, int change_5THB, int change_1THB) {
		System.out.printf(Constants.MESSAGE_INFO_CHANGE, (totalChange));
		if(change_10THB > 0) System.out.printf(Constants.MESSAGE_INFO_10THB, change_10THB);
		if(change_5THB > 0)  System.out.printf(Constants.MESSAGE_INFO_5THB, change_5THB);
		if(change_1THB > 0)  System.out.printf(Constants.MESSAGE_INFO_1THB, change_1THB);
	}
	
}
