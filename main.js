import { User } from "./User.js";
import { Account } from "./Account.js";

const newUser = new User("Adriano Junqueira", "05122205122");
//newUser.cpf = "11122222201";
//newUser.name = "André";
console.log(newUser.cpf);
console.log(newUser.name);

const newAccount = new Account("0199", newUser, 12);
newAccount._balance = 1200;
console.log(newAccount);
