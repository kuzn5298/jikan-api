import { UserMeta } from '../common';

export interface AnimeReview {
    /**
     * @type {UserMeta}
     */
    user: UserMeta;
    /**
     * MyAnimeList ID
     *
     * @type {number}
     */
    mal_id: number;
    /**
     * MyAnimeList URL
     *
     * @type {string}
     */
    url: string;
    /**
     * Entry Type
     * 
     * @type {string}
s     */
    type: string;
    /**
     * Number of user votes on the Review
     *
     * @type {number}
     */
    votes: number;
    /**
     * Review created date ISO8601
     *
     * @type {string}
     */
    date: string;
    /**
     * Review content
     *
     * @type {string}
     */
    review: string;
    /**
     * Number of episodes watched
     *
     * @type {number}
     */
    episodesWatched: number;
    /**
     * @type {AnimeReviewScores}
     */
    scores: AnimeReviewScores;
}

/**
 * Review Scores breakdown
 */
export interface AnimeReviewScores {
    /**
     * Overall Score
     * 
     * @type {number}
s     */
    overall: number;
    /**
     * Story Score
     *
     * @type {number}
     */
    story: number;
    /**
     * Animation Score
     *
     * @type {number}
     */
    animation: number;
    /**
     * Sound Score
     *
     * @type {number}
     */
    sound: number;
    /**
     * Character Score
     *
     * @type {number}
     */
    character: number;
    /**
     * Enjoyment Score
     *
     * @type {number}
     */
    enjoyment: number;
}
