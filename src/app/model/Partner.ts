export interface IPartner {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export class Partner implements IPartner {
    constructor(
        public id: number,
        public lastName: string,
        public firstName: string,
        public email: string,
        public phoneNumber: string,
        public address: string
    ) {

    }
}