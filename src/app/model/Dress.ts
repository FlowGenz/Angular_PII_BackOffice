export interface IDress {
    id: number;
    lastName: string;
    description: string;
    price: number;
    availability: boolean;
    startAvailabilityDate: Date;
    endAvailabilityDate: Date;
    partnerId: number;
}

export class Dress implements IDress {
    
    constructor(
        public id: number,
        public lastName: string,
        public description: string,
        public price: number,
        public availability: boolean,
        public startAvailabilityDate: Date,
        public endAvailabilityDate: Date,
        public partnerId: number) {
            
        }
}