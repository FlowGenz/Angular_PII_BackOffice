export interface ICustomer {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    loyaltyPoints: number;
}

export class Customer implements ICustomer {

    constructor(public id: number,
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public address: string,
        public loyaltyPoints: number) {

    }
}