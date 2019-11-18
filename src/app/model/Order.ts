export interface Order {
    id: number;
    dateFacturation: Date;
    dateLivraison: Date;
    adresseFacturation: string;
    adresseLivraison: string;
    estValide: boolean;
    clientId: number;
}