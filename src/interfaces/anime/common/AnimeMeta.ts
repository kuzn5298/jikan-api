import { AnimeImages } from './AnimeImages';

export interface AnimeMeta {
    /**
     * MyAnimeList ID
     *
     * @type {number}
     */
    malId: number;
    /**
     * MyAnimeList URL
     *
     * @type {string}
     */
    url: string;
    /**
     * @type {AnimeImages}
     */
    images: AnimeImages;
    /**
     * Entry title
     *
     * @type {string}
     */
    title: string;
}
