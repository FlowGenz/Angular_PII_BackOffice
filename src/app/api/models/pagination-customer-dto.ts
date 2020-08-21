/* tslint:disable */
import { CustomerDTO } from './customer-dto';
export interface PaginationCustomerDTO {
  customersDTO?: Array<CustomerDTO>;
  pageSize?: number;
  pageIndex?: number;
  totalPages?: number;
}
