export interface IOrder {
    id: number;
    dateFacturation: Date;
    dateLivraison: Date;
    adresseFacturation: string;
    adresseLivraison: string;
    estValide: boolean;
    clientId: number;
}

export class Order implements IOrder {
    
    constructor(
        public id: number,
        public dateFacturation: Date,
        public dateLivraison: Date,
        public adresseFacturation: string,
        public adresseLivraison: string,
        public estValide: boolean,
        public clientId: number) {

        }
}