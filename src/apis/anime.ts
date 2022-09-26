import { client } from '../libs';
import { AnimeForumFilter, AnimeRequest, Api } from '../enums';
import {
    Anime,
    AnimeCharacter,
    AnimeEpisode,
    AnimeEpisodeDetail,
    AnimeFull,
    AnimeStaff,
    AnimeExternal,
    AnimeImages,
    AnimeRelation,
    AnimeReview,
    AnimeStatistics,
    AnimeTheme,
    AnimeUserUpdate,
    AnimeVideo,
    AnimeVideoEpisodes,
    AnimeRecommendation,
    AnimeSearchParameters,
} from '../interfaces/anime';
import {
    ResponseData,
    ResponseDataWithShortPagination,
    ResponseDataFullPagination,
} from '../interfaces/response';
import { Forum, MoreInfo, News } from '../interfaces/common';

/**
 * Fetch the anime detail by anime ID.
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeById}
 */
export const getAnime = (id: number): Promise<ResponseData<Anime>> => {
    return client.get([Api.ANIME, id]);
};

/**
 * Fetch the complete anime detail by anime ID.
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById}
 */
export const getAnimeFull = (id: number): Promise<ResponseData<AnimeFull>> => {
    return client.get([Api.ANIME, id, AnimeRequest.FULL]);
};

/**
 * Fetch the list of characters of the anime.
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeCharacters}
 */
export const getCharacters = (
    id: number
): Promise<ResponseData<AnimeCharacter[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.CHARACTERS]);
};

/**
 * Fetch the list of staff members of the anime.
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStaff}
 */
export const getStaff = (id: number): Promise<ResponseData<AnimeStaff[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.STAFF]);
};

/**
 * Fetch the paged list of episodes of the anime.
 *
 * @param {number} id - The anime id
 * @param {number} [page] - The page number
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodes}
 */
export const getEpisodes = (
    id: number,
    page: number
): Promise<ResponseDataWithShortPagination<AnimeEpisode[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.EPISODES], { page });
};

/**
 * Fetch the episode of the anime by episode number.
 *
 * @param {number} id - The anime id
 * @param {number} episode - The episode number
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodeById}
 */
export const getEpisode = (
    id: number,
    episode: number
): Promise<ResponseData<AnimeEpisodeDetail>> => {
    return client.get([Api.ANIME, id, AnimeRequest.EPISODES, episode]);
};

/**
 * Fetch the paged list of news of the anime.
 *
 * @param {number} id - The anime id
 * @param {number} [page] - The page number
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeNews}
 */
export const getNews = (
    id: number,
    page: number
): Promise<ResponseDataWithShortPagination<News[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.NEWS], { page });
};

/**
 * Fetch forum topics related to the anime with filters
 *
 * @param {number} id - The anime id
 * @param {AnimeForumFilter} [filter] - "all", "episode", "other"
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeForum}
 */
export const getForum = (
    id: number,
    filter: AnimeForumFilter
): Promise<ResponseData<Forum[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.FORUM], { filter });
};

/**
 * Fetch PV & MV & episodes related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeVideos}
 */
export const getVideos = (id: number): Promise<ResponseData<AnimeVideo[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.VIDEOS]);
};

/**
 * Fetch paged video episodes related to the anime
 *
 * @param {number} id - The anime id
 * @param {number} [page] - The page number
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeVideosEpisodes}
 */
export const getVideoEpisodes = (
    id: number
): Promise<ResponseDataWithShortPagination<AnimeVideoEpisodes[]>> => {
    return client.get([
        Api.ANIME,
        id,
        AnimeRequest.VIDEOS,
        AnimeRequest.EPISODES,
    ]);
};

/**
 * Fetch pictures related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimePictures}
 */
export const getPictures = (
    id: number
): Promise<ResponseData<AnimeImages[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.PICTURES]);
};

/**
 * Fetch statistical information related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStatistics}
 */
export const getStatistics = (
    id: number
): Promise<ResponseData<AnimeStatistics>> => {
    return client.get([Api.ANIME, id, AnimeRequest.STATISTICS]);
};

/**
 * Fetch more info related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeMoreInfo}
 */
export const getMoreInfo = (id: number): Promise<ResponseData<MoreInfo>> => {
    return client.get([Api.ANIME, id, AnimeRequest.MORE_INFO]);
};

/**
 * Fetch user recommendations related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeRecommendations}
 */
export const getRecommendations = (
    id: number
): Promise<ResponseData<AnimeRecommendation[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.RECOMMENDATIONS]);
};

/**
 * Fetch the paged list of latest user updates related to the anime
 *
 * @param {number} id - The anime id
 * @param {number} [page] - The page number
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeUserUpdates}
 */
export const getUserUpdates = (
    id: number,
    page: number
): Promise<ResponseDataWithShortPagination<AnimeUserUpdate[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.USER_UPDATES], { page });
};

/**
 * Fetch the paged list of reviews written by users related to the anime
 *
 * @param {number} id - The anime id
 * @param {number} [page] - The page number
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeReviews}
 */
export const getReviews = (
    id: number,
    page: number
): Promise<ResponseDataWithShortPagination<AnimeReview[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.REVIEWS], { page });
};

/**
 * Fetch the list of relations related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeRelations}
 */
export const getRelations = (
    id: number
): Promise<ResponseData<AnimeRelation[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.RELATIONS]);
};

/**
 * Fetch the list of themes related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeThemes}
 */
export const getThemes = (id: number): Promise<ResponseData<AnimeTheme[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.THEMES]);
};

/**
 * Fetch the list of external links related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeExternal}
 */
export const getExternals = (
    id: number
): Promise<ResponseData<AnimeExternal[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.EXTERNAL]);
};

/**
 * Fetch the list of streaming links related to the anime
 *
 * @param {number} id - The anime id
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStreaming}
 */
export const getStreaming = (
    id: number
): Promise<ResponseData<AnimeExternal[]>> => {
    return client.get([Api.ANIME, id, AnimeRequest.STREAMING]);
};

/**
 * Fetch anime by search query and parameters
 *
 * @param {string} - Search query
 * @param {AnimeSearchParameters} parameters - Anime search parameters
 * @see {@link https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch}
 */
export const search = (
    search = '',
    parameters: AnimeSearchParameters = {}
): Promise<ResponseDataFullPagination<Anime[]>> => {
    return client.get([Api.ANIME], { ...parameters, q: search });
};
