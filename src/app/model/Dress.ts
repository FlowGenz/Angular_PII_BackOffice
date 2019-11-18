export interface IDress {
    id: number;
    nom: string;
    description: string;
    prix: number;
    disponibilite: boolean;
    dateDebutDisponibilite: Date;
    dateFinDisponibilite: Date;
    partenaireId: number;
}

export class Dress implements IDress {
    

    constructor(public id: number,
        public nom: string,
        public description: string,
        public prix: number,
        public disponibilite: boolean,
        public dateDebutDisponibilite: Date,
        public dateFinDisponibilite: Date,
        public partenaireId: number) {
            
        }
}