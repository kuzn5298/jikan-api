import { MalNameUrl } from '../../common';

export interface AnimeRelation {
    /**
     * Relation type
     *
     * @type {string}
     */
    relation: string;
    /**
     * @type {Array<MalNameUrl>}
     */
    entry: Array<MalNameUrl>;
}
