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
     * @type {number}
     */
    current_page: number;
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
    per_page: number;
}
