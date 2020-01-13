/* tslint:disable */
export interface DressDTO {
  available: boolean;
  id: string;
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
