/* tslint:disable */
export interface DressDTO {
  id: number;
  dressName: string;
  describe: string;
  price: number;
  available: boolean;
  dateBeginAvailable: string;
  dateEndAvailable?: string;
  partnerId: number;
  partnerName: string;
}
