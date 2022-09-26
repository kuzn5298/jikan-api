export interface ShortPagination {
    /**
     * @type {number}
     */
    last_visible_page: number;
    /**
     * @type {boolean}
     */
    has_next_page: boolean;
}

export interface FullPagination {
    /**
     * @type {number}
     */
    last_visible_page: number;
    /**
     * @type {boolean}
     */
    has_next_page: boolean;
    /**
     * @type {PaginationItems}
     */
    items: PaginationItems;
}

export interface PaginationItems {
    /**
     * @type {number}
     */
    count: number;
    /**
     * @type {number}
     */
    total: number;
    /**
     * @type {number}
     */
    perPage: number;
}
