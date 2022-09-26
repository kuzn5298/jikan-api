import { Images } from './Images';

/**
 * News
 */
export interface News {
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
     * Title
     *
     * @type {string}
     */
    title: string;
    /**
     * Post Date ISO8601
     *
     * @type {string}
     */
    date: string;
    /**
     * Author MyAnimeList username
     *
     * @type {string}
     */
    author_username: string;
    /**
     * Author profile URL
     *
     * @type {string}
     */
    author_url: string;
    /**
     * Forum topic URL
     *
     * @type {string}
     */
    forum_url: string;
    /**
     * @type {CommonImages}
     */
    images: Images;
    /**
     * Comment count
     *
     * @type {number}
     */
    comments: number;
    /**
     * Excerpt
     *
     * @type {string}
     */
    excerpt: string;
}
