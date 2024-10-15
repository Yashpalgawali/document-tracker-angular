import { UserType } from "./UserType";

export class User {
    
    userid !: number;
	username!:string;
	email !: string;
	password!:string;
	cnf_password!:string;
	enabled!:number;
	role !: string;
	usertype : UserType = new UserType()
}