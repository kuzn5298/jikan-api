import { Trailer } from '../common';

export interface AnimeVideo {
    /**
     * @type {Array<AnimeVideoPromo>}
     */
    promo: AnimeVideoPromo[];
    /**
     * @type {Array<AnimeVideoEpisodes>}
     */
    episodes: AnimeVideoEpisodes[];
    /**
     * @type {Array<AnimeVideoMusicVideo>}
     */
    music_videos: AnimeVideoMusicVideo[];
}

export interface AnimeVideoPromo {
    /**
     * Title
     *
     * @type {string}
     */
    title: string;
    /**
     * @type {Trailer}
     */
    trailer: Trailer;
}

export interface AnimeVideoMusicVideo {
    /**
     * Title
     *
     * @type {string}
     */
    title: string;
    /**
     * @type {Trailer}
     */
    video: Trailer;
    /**
     * @type {AnimeVideosMeta}
     */
    meta: AnimeVideosMeta;
}

export interface AnimeVideosMeta {
    /**
     * @type {string}
     */
    title: string;
    /**
     * @type {string}
     */
    author: string;
}

export interface AnimeVideoEpisodes {
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
     * Episode
     *
     * @type {string}
     */
    episode: string;
    /**
     * @type {AnimeVideoImages}
     */
    images: AnimeVideoImages;
}

export interface AnimeVideoImages {
    /**
     * @type {AnimeVideoImagesData}
     */
    jpg: AnimeVideoImagesData;
}

export interface AnimeVideoImagesData {
    /**
     * Image
     *
     * @type {string}
     */
    image_url: string;
}
