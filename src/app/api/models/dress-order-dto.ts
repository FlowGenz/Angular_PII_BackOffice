/* tslint:disable */
import { OrderLineDTO } from './order-line-dto';
export interface DressOrderDTO {
  id?: string;
  billingDate?: string;
  deliveryDate?: string;
  billingAddress: string;
  deliveryAddress: string;
  isValid: boolean;
  customerId: string;
  customerName: string;
  orderLines?: Array<OrderLineDTO>;
}
