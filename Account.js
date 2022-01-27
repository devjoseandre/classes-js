import { User } from "./User.js";
export class Account {
  _user;
  _balance;
  branch;
  static accountNumbers;

  constructor(branch, user, balance) {
    this.branch = branch;
    this._user = user;
    this._balance = balance;
    Account.accountNumbers++;
  }

  set user(newUser) {
    if (newUser instanceof User) {
      this._user = newUser;
    }
  }

  get user() {
    return this._user;
  }

  get balance() {
    return this._balance;
  }

  toWithdraw(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  toDeposit(newValue) {
    if (newValue <= 0) {
      return;
    }
    this._balance += newValue;
  }

  toTranfer(value, account) {
    const withdrewValue = this.toWithdraw(value);
    account.toDeposit(withdrewValue);
  }
}
