import {
    AnimeSearchRating,
    AnimeSearchStatus,
    AnimeType,
    AnimeSearchOrder,
    Sort,
} from '../../../enums';

/**
 * Search parameters for a anime search request.
 */
export interface AnimeSearchParameters {
    /**
     * Page number.
     *
     * @type {number}
     */
    page?: number;
    /**
     * Page data limit
     *
     * @type {number}
     */
    limit?: number;
    /**
     * Type
     *
     * @type {AnimeType}
     */
    type?: AnimeType;
    /**
     * Score
     *
     * @type {number}
     */
    score?: AnimeType;
    /**
     * Min score
     *
     * @type {number}
     */
    min_score?: number;
    /**
     * Max score
     *
     * @type {number}
     */
    max_score?: number;
    /**
     * Status
     *
     * @type {AnimeSearchStatus}
     */
    status?: AnimeSearchStatus;
    /**
     * Rating
     *
     * @type {AnimeSearchRating}
     */
    rating?: AnimeSearchRating;
    /**
     * Filter out Adult entries
     *
     * @type {boolean}
     */
    sfw?: boolean;
    /**
     * Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
     *
     * @type {string}
     */
    genres?: string;
    /**
     * Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
     *
     * @type {string}
     */
    genres_exclude?: string;
    /**
     * Available Anime order_by properties
     *
     * @type {AnimeSearchOrder}
     */
    order_by?: AnimeSearchOrder;
    /**
     * Characters Search Query Sort
     *
     * @type {Sort}
     */
    sort?: Sort;
    /**
     * Return entries starting with the given letter
     *
     * @type {string}
     */
    letter?: string;
    /**
     * Filter by producer(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
     *
     * @type {string}
     */
    producers?: string;
    /**
     * Filter by starting date. Format: YYYY-MM-DD. e.g 2022, 2005-05, 2005-01-01
     *
     * @type {string}
     */
    start_date?: string;
    /**
     * Filter by ending date. Format: YYYY-MM-DD. e.g 2022, 2005-05, 2005-01-01
     *
     * @type {string}
     */
    end_date?: string;
}
