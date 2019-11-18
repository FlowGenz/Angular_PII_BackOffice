export interface ICustomer {
    id: number;
    username: string;
    password: string;
    prenom: string;
    nom: string;
    adresseMail: string;
    numeroTelephone: string;
    adresse: string;
    pointsFidelite: number;
}

export class Customer implements ICustomer {
    public id: number;
    public username: string;
    public password: string;
    public prenom: string;
    public nom: string;
    public adresseMail: string;
    public numeroTelephone: string;
    public adresse: string;
    public pointsFidelite: number;

    constructor(id: number, username: string, password: string, prenom: string, nom: string, adresseMail: string, numeroTelephone: string, adresse: string, pointsFidelite: number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.prenom = prenom;
        this.nom = nom;
        this.adresseMail = adresseMail;
        this.numeroTelephone = numeroTelephone;
        this.adresse = adresse;
        this.pointsFidelite = pointsFidelite;
    }
}