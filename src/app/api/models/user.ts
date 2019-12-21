/* tslint:disable */
import { Dress } from './dress';
import { DressOrder } from './dress-order';
import { Favorites } from './favorites';
export interface User {
  phoneNumber?: string;
  id?: number;
  userPassword?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  userAddress?: string;
  loyaltyPoints?: number;
  dress?: Array<Dress>;
  dressOrder?: Array<DressOrder>;
  favorites?: Array<Favorites>;
}
