/* tslint:disable */
import { DressOrderDTO } from './dress-order-dto';
export interface PaginationDressOrderDTO {
  dressOrdersDTO?: Array<DressOrderDTO>;
  pageSize?: number;
  pageIndex?: number;
  totalPages?: number;
}
