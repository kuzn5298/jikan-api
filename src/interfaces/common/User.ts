import { UserImages } from './Images';

/**
 * User Meta data
 */
export interface UserMeta {
    /**
     * MyAnimeList username
     *
     * @type {string}
     */
    username: string;
    /**
     * MyAnimeList profile URL
     *
     * @type {string}
     */
    url: string;
    /**
     * @type {UserImages}
     */
    images: UserImages;
}
