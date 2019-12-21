/* tslint:disable */
import { User } from './user';
import { Favorites } from './favorites';
import { OrderLine } from './order-line';
export interface Dress {
  dateEndAvailable?: string;
  id?: number;
  describe?: string;
  price?: number;
  available?: boolean;
  dateBeginAvailable?: string;
  dressName?: string;
  urlImage?: string;
  userId?: number;
  user?: User;
  favorites?: Array<Favorites>;
  orderLine?: Array<OrderLine>;
}
