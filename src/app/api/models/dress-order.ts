/* tslint:disable */
import { User } from './user';
import { OrderLine } from './order-line';
export interface DressOrder {
  id?: number;
  billingDate?: string;
  deliveryDate?: string;
  billingAddress?: string;
  deliveryAddress?: string;
  isValid?: boolean;
  userId?: number;
  user?: User;
  orderLine?: Array<OrderLine>;
}
