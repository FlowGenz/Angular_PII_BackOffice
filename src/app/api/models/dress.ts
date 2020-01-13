/* tslint:disable */
import { User } from './user';
import { Favorites } from './favorites';
import { OrderLine } from './order-line';
export interface Dress {
  dateBeginAvailable: string;
  id?: string;
  description: string;
  price: number;
  size: string;
  available: boolean;
  dressName: string;
  dateEndAvailable?: string;
  urlImage: string;
  userId: string;
  user?: User;
  favorites?: Array<Favorites>;
  orderLine?: Array<OrderLine>;
}
