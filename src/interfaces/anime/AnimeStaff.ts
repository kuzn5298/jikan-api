import { PeopleImages } from '../../interfaces';

export interface AnimeStaff {
    /**
     * @type {AnimeStaffPerson}
     */
    person: AnimeStaffPerson;
    /**
     * @type {Array<string>}
     */
    positions: string[];
}

/**
 * Person details
 */
export interface AnimeStaffPerson {
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
     * @type {PeopleImages}
     */
    images: PeopleImages;
    /**
     * Name
     *
     * @type {string}
     */
    name: string;
}
