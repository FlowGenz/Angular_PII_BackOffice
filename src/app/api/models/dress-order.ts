/* tslint:disable */
import { User } from './user';
import { OrderLine } from './order-line';
export interface DressOrder {
  id?: string;
  billingDate?: string;
  deliveryDate?: string;
  billingAddress: string;
  deliveryAddress: string;
  isValid: boolean;
  userId: string;
  user?: User;
  orderLine?: Array<OrderLine>;
}
