/**
 * Anime Episode
 */
export interface AnimeEpisode {
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
     * Title Japanese
     *
     * @type {string}
     */
    title_japanese: string;
    /**
     * Title Romanji
     *
     * @type {string}
     */
    title_romanji: string;
    /**
     * Episode duration in seconds
     *
     * @type {number}
     */
    aired: string;
    /**
     * Anime score
     *
     * @type {number}
     */
    score: number;
    /**
     * Filler episode
     *
     * @type {boolean}
     */
    filler: boolean;
    /**
     * Recap episode
     *
     * @type {boolean}
     */
    recap: boolean;
    /**
     * MyAnimeList forum URL
     *
     * @type {string}
     */
    forum_url: string;
}

/**
 * Anime Episode Detail
 */
export interface AnimeEpisodeDetail {
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
     * Title Japanese
     *
     * @type {string}
     */
    title_japanese: string;
    /**
     * Title Romanji
     *
     * @type {string}
     */
    title_romanji: string;
    /**
     * Episode duration in seconds
     *
     * @type {number}
     */
    aired: string;
    /**
     * Anime score
     *
     * @type {number}
     */
    duration: number;
    /**
     * Aired Date ISO8601
     *
     * @type {string}
     */
    filler: boolean;
    /**
     * Recap episode
     *
     * @type {boolean}
     */
    recap: boolean;
    /**
     * Episode Synopsis
     *
     * @type {string}
     */
    synopsis: string;
}
