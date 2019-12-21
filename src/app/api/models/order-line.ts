/* tslint:disable */
import { Dress } from './dress';
import { DressOrder } from './dress-order';
export interface OrderLine {
  id?: number;
  dateBeginLocation?: string;
  dateEndLocation?: string;
  finalPrice?: number;
  userId?: number;
  dressOrderId?: number;
  dressId?: number;
  dress?: Dress;
  dressOrder?: DressOrder;
}
