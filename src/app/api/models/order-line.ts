/* tslint:disable */
import { Dress } from './dress';
import { DressOrder } from './dress-order';
export interface OrderLine {
  id?: string;
  dateBeginLocation?: string;
  dateEndLocation?: string;
  finalPrice: number;
  dressOrderId: string;
  dressId: string;
  dress?: Dress;
  dressOrder?: DressOrder;
}
