/**
 * Forum
 */
export interface Forum {
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
     * Author MyAnimeList Username
     *
     * @type {string}
     */
    author_username: string;
    /**
     * Author Profile URL
     *
     * @type {string}
     */
    author_url: string;
    /**
     * Comment count
     *
     * @type {number}
     */
    comments: number;
    /**
     * Last comment details
     *
     * @type {ForumLastComment}
     */
    last_comment: ForumLastComment;
}

/**
 * Last comment details
 */
export interface ForumLastComment {
    /**
     * Last comment URL
     *
     * @type {string}
     */
    url: string;
    /**
     * Author MyAnimeList Username
     *
     * @type {string}
     */
    author_username: string;
    /**
     * Author Profile URL
     *
     * @type {string}
     */
    author_url: string;
    /**
     * Last comment date posted ISO8601
     *
     * @type {string}
     */
    date: string;
}
