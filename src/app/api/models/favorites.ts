/* tslint:disable */
import { Dress } from './dress';
import { User } from './user';
export interface Favorites {
  id?: string;
  userId: string;
  dressId: string;
  dress?: Dress;
  user?: User;
}
