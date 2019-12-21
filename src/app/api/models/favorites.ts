/* tslint:disable */
import { Dress } from './dress';
import { User } from './user';
export interface Favorites {
  id?: number;
  userId?: number;
  dressId?: number;
  dress?: Dress;
  user?: User;
}
