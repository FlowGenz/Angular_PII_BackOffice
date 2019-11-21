import { MatPaginatorIntl } from '@angular/material';

const FIRST_PAGE_PAGINATOR: string = "Première page";
const PREVIOUS_PAGE_PAGINATOR: string = "Page précedente";
const NEXT_PAGE_PAGINATOR: string = "Page suivante";
const LAST_PAGE_PAGINATOR: string = "Dernière page";
const ITEMS_PER_PAGE_DEFAULT_PAGINATOR: string = "Objets par page";

const frenchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 sur ${length}`; }
  
  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} sur ${length}`;
}


export function getFrenchPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  
  paginatorIntl.itemsPerPageLabel = ITEMS_PER_PAGE_DEFAULT_PAGINATOR;
  paginatorIntl.firstPageLabel = FIRST_PAGE_PAGINATOR;
  paginatorIntl.previousPageLabel = PREVIOUS_PAGE_PAGINATOR;
  paginatorIntl.nextPageLabel = NEXT_PAGE_PAGINATOR;
  paginatorIntl.lastPageLabel = LAST_PAGE_PAGINATOR;
  paginatorIntl.getRangeLabel = frenchRangeLabel;
  
  return paginatorIntl;
}