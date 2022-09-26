import { UserMeta } from '../common';

export interface AnimeUserUpdate {
    /**
     * @type {UserMeta}
     */
    user: UserMeta;
    /**
     * User Score
     *
     * @type {number}
     */
    score: number;
    /**
     * User list status
     *
     * @type {string}
     */
    status: string;
    /**
     * Number of episodes seen
     *
     * @type {number}
     */
    episodes_seen: number;
    /**
     * Total number of episodes
     *
     * @type {number}
     */
    episodes_total: number;
    /**
     * Last updated date ISO8601
     *
     * @type {string}
     */
    date: string;
}
