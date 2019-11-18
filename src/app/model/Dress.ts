export interface Dress {
    id: number;
    nom: string;
    description: string;
    prix: number;
    disponibilite: boolean;
    dateDebutDisponibilite: Date;
    dateFinDisponibilite: Date;
    partenaireId: number;
}