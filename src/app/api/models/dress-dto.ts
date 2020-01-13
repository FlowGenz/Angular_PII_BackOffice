/* tslint:disable */
export interface DressDTO {
  id: string;
  available: boolean;
  description: string;
  price: number;
  size: string;
  dressName: string;
  dateBeginAvailable: string;
  dateEndAvailable?: string;
  partnerId: string;
  partnerName: string;
  urlImage: string;
}
