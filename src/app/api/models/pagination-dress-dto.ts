/* tslint:disable */
import { DressDTO } from './dress-dto';
export interface PaginationDressDTO {
  dressesDTO?: Array<DressDTO>;
  pageSize?: number;
  pageIndex?: number;
  totalPages?: number;
}
