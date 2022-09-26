import { CharacterImages } from '../character';
import { PeopleImages } from '../people';

export interface AnimeCharacter {
    /**
     * @type {AnimeCharactersDetail}
     */
    character: AnimeCharactersDetail;
    /**
     * Character's Role
     *
     * @type {string}
     */
    role: string;
    /**
     * @type {Array<AnimeCharacterVoiceActor>}
     */
    voiceActors: AnimeCharacterVoiceActor[];
}

/**
 * Character details
 */
export interface AnimeCharactersDetail {
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
     * @type {CharacterImages}
     */
    images: CharacterImages;
    /**
     * Character Name
     *
     * @type {string}
     */
    name: string;
}

export interface AnimeCharacterVoiceActor {
    /**
     * @type {AnimeCharacterPerson}
     */
    person: AnimeCharacterPerson;
    /**
     * @type {string}
     */
    language: string;
}

export interface AnimeCharacterPerson {
    /**
     * @type {number}
     */
    mal_id: number;
    /**
     * @type {string}
     */
    url: string;
    /**
     * @type {PeopleImages}
     */
    images: PeopleImages;
    /**
     * @type {string}
     */
    name: string;
}
