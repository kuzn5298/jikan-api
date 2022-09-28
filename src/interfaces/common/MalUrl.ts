/**
 * Parsed URL Data
 */
export interface MalNameUrl {
    /**
     * MyAnimeList ID
     *
     * @type {number}
     */
    mal_id: number;
    /**
     * Type of resource
     *
     * @type {string}
     */
    type: string;
    /**
     * Resource name
     *
     * @type {string}
     */
    name: string;
    /**
     * MyAnimeList URL
     *
     * @type {string}
     */
    url: string;
}

/**
 * Parsed URL Data
 */
export interface MalTitleUrl {
    /**
     * MyAnimeList ID
     *
     * @type {number}
     */
    malId: number;
    /**
     * Type of resource
     *
     * @type {string}
     */
    type: string;
    /**
     * Resource title
     *
     * @type {string}
     */
    title: string;
    /**
     * MyAnimeList URL
     *
     * @type {string}
     */
    url: string;
}
