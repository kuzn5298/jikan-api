import { Anime } from './Anime';
import { AnimeExternal, AnimeRelation, AnimeTheme } from './common';

/**
 * Model for an full anime.
 */
export interface AnimeFull extends Anime {
    /**
     * A list of related resources for this anime
     *
     * @type {Array<AnimeRelation>}
     */
    relations: AnimeRelation[];
    /**
     * A list of opening/ending themes for this anime
     *
     * @type {AnimeTheme}
     */
    theme: AnimeTheme;
    /**
     *  A list of external resources for this anime
     *
     * @type {Array<AnimeExternal>}
     */
    external: AnimeExternal[];
    /**
     * A list of links to streaming of this anime
     *
     * @type {Array<AnimeExternal>}
     */
    streaming: AnimeExternal[];
}
