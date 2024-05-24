export interface PageDto<T> {
  data: T[];
  meta: PageMeta;
}

export interface PageMeta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
}

export interface PageOptions {
  order?: PageOrder;
  page?: number;
  take?: number;
  takeAll?: boolean;
  q?: string;
}

export type PageOrder = 'ASC' | 'DESC';
