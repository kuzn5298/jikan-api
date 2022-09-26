import { AnimeMeta } from './common';

/**
 * Entry Recommendations
 */
export interface AnimeRecommendation {
    /**
     * Array of AnimeMeta
     *
     * @type {Array<AnimeMeta>}
     */
    entry: AnimeMeta[];
    /**
     * Recommendation URL
     *
     * @type {string}
     */
    url: string;
    /**
     * Votes
     *
     * @type {number}
     */
    votes: number;
}
