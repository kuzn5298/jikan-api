import { AnimeRating, AnimeSeason, AnimeStatus, AnimeType } from '../../enums';
import { Aired, Broadcast, MalNameUrl, Trailer } from '../common';
import { AnimeImages, AnimeTitle } from './common';

/**
 * Model for an anime.
 */
export interface Anime {
    /**
     * MyAnimeList ID
     *
     * @type {number}
     */
    mal_id: number;
    /**
     * The MyAnimeList URL to this anime
     *
     * @type {string}
     * @example https://myanimelist.net/anime/1/Cowboy_Bebop
     */
    url: string;
    /**
     * The URL to the cover image.
     *
     * @type {AnimeImages}
     */
    images: AnimeImages;
    /**
     * The trailer video (youtube).
     *
     * @type {Trailer}
     */
    trailer: Trailer;
    /**
     * Whether the entry is pending approval on MAL or not
     *
     * @type {boolean}
     */
    approved: boolean;
    /**
     * A list of titles (Actual way to get a title)
     *
     * @type {Array<AnimeTitle>}
     */
    titles: AnimeTitle[];
    /**
     * The official title (can be japanese title).
     *
     * @type {string}
     * @deprecated You can use the titles
     */
    title: string;
    /**
     * The english title.
     *
     * @remarks
     * If no english title is given, this property is null.
     *
     * @type {?string}
     * @example Cowboy Bebop
     * @deprecated You should use the titles
     */
    title_english: string | null;
    /**
     * The japanese title.
     *
     * @type {string}
     * @example カウボーイビバップ
     * @deprecated You should use the titles
     */
    title_japanese: string;
    /**
     * Synonyms for this anime.
     *
     * @type {Array<string>}
     * @deprecated You should use the titles
     */
    title_synonyms: string[];
    /**
     * The type of this anime.
     *
     * @type {AnimeType}
     */
    type: AnimeType;
    /**
     * The original Material/Source of this anime.
     *
     * @type {string}
     */
    source: string;
    /**
     * The number of episodes.
     *
     * @remarks
     * If the number is unknown, this property is null.
     *
     * @type {?number}
     */
    episodes: number | null;
    /**
     * The airing status for this anime.
     *
     * Enum: `Finished Airing`, `Currently Airing`, `Not yet aired`
     *
     * @type {AnimeStatus}
     * @example Finished Airing
     */
    status: AnimeStatus;
    /**
     * Indicator if this anime is airing.
     *
     * @type {boolean}
     */
    airing: boolean;
    /**
     * The airing times for this anime.
     *
     * @type {Aired}
     */
    aired: Aired;
    /**
     * Episode duration.
     *
     * @type {string}
     * @example 24 min per ep
     */
    duration: string;
    /**
     * Age rating for this anime.
     *
     * Enum: `G - All Ages`, `PG - Children`, `PG-13 - Teens 13 or older`, `R - 17+ (violence & profanity)`, `R+ - Mild Nudity`, `Rx - Hentai`
     *
     * @type {AnimeRating}
     * @example R - 17+ (violence & profanity)
     */
    rating: AnimeRating;
    /**
     * Average user rating.
     *
     * @remarks
     * If no score is available, this property is null.
     *
     * @type {?number}
     */
    score: number | null;
    /**
     * Number of users who gave a rating.
     *
     * @remarks
     * If no score is available, this property is null.
     *
     * @type {?number}
     */
    scored_by: number | null;
    /**
     * Global MyAnimeList rank for this anime.
     *
     * @remarks
     * If no score is available, this property is null.
     *
     * @type {?number}
     */
    rank: number | null;
    /**
     * The popularity for this anime.
     *
     * @type {number}
     */
    popularity: number;
    /**
     * Number of users who have added this entry to their list
     *
     * @type {number}
     */
    members: number;
    /**
     * Number of users who have favorited this entry
     *
     * @type {number}
     */
    favorites: number;
    /**
     * A synopsis for this anime (english).
     *
     * @remarks
     * If no synopsis is provided, this property is null.
     *
     * @type {?string}
     */
    synopsis: string | null;
    /**
     * Background information for this anime (english).
     *
     * @remarks
     * If no background is provided, this property is null.
     *
     * @type {?string}
     */
    background: string | null;
    /**
     * The season this anime was aired.
     *
     * Enum: `summer`, `winter`, `spring`, `fall`
     *
     * @remarks
     * If the season is unknown, this property is null.
     *
     * @type {?AnimeSeason}
     * @example spring
     */
    season: AnimeSeason | null;
    /**
     * The year this anime was aired.
     *
     * @remarks
     * If the year is unknown, this property is null.
     *
     * @type {?number}
     * @example 1998
     */
    year: number | null;
    /**
     * Broadcast time for this anime.
     *
     * @remarks
     * If the broadcast is unknown, this property is null.
     *
     * @type {?Broadcast}
     */
    broadcast: Broadcast | null;
    /**
     * A list of producers for this anime.
     *
     * @type {Array<MalNameUrl>}
     */
    producers: MalNameUrl[];
    /**
     * A list of licensors.
     *
     * @type {Array<MalNameUrl>}
     */
    licensors: MalNameUrl[];
    /**
     * The studios which worked on this anime.
     *
     * @type {Array<MalNameUrl>}
     */
    studios: MalNameUrl[];
    /**
     * A list of genres.
     *
     * @type {Array<MalNameUrl>}
     */
    genres: MalNameUrl[];
    /**
     * A list of explicit genres.
     *
     * @type {Array<MalNameUrl>}
     */
    explicit_genres: MalNameUrl[];
    /**
     * A list of themes for this anime
     *
     * @type {Array<MalNameUrl>}
     */
    themes: MalNameUrl[];
    /**
     * A list of demographics
     *
     * @type {Array<MalNameUrl>}
     */
    demographics: MalNameUrl[];
}
