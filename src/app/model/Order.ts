export interface IOrder {
    id: number;
    billingDate: Date;
    deliveryDate: Date;
    billingAddress: string;
    deliveryAddress: string;
    isValid: boolean;
    customerId: number;
}

export class Order implements IOrder {
    
    constructor(
        public id: number,
        public billingDate: Date,
        public deliveryDate: Date,
        public billingAddress: string,
        public deliveryAddress: string,
        public isValid: boolean,
        public customerId: number) {

        }
}