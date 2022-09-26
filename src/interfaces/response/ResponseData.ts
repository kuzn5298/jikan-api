import { FullPagination, ShortPagination } from './Pagination';

/**
 * Response data
 *
 * @param Data data
 */
export interface ResponseData<Data> {
    data: Data;
}

/**
 * Response data with pagination
 *
 * @param Data
 */
export interface ResponseDataWithShortPagination<Data> {
    data: Data;
    pagination: ShortPagination;
}

/**
 * Response data with full pagination
 *
 * @param Data
 */
export interface ResponseDataFullPagination<Data> {
    data: Data;
    pagination: FullPagination;
}
