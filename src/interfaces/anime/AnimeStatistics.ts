export interface AnimeStatistics {
    /**
     * Number of users watching the resource
     *
     * @type {number}
     */
    watching: number;
    /**
     * Number of users who have completed the resource
     *
     * @type {number}
     */
    completed: number;
    /**
     * Number of users who have put the resource on hold
     *
     * @type {number}
     */
    on_hold: number;
    /**
     * Number of users who have dropped the resource
     *
     * @type {number}
     */
    dropped: number;
    /**
     * Number of users who have planned to watch the resource
     *
     * @type {number}
     */
    plan_to_watch: number;
    /**
     * Total number of users who have the resource added to their lists
     *
     * @type {number}
     */
    total: number;
    /**
     * @type {Array<AnimeStatisticsScore>}
     */
    scores: AnimeStatisticsScore[];
}

export interface AnimeStatisticsScore {
    /**
     * Scoring value
     *
     * @type {number}
     */
    score: number;
    /**
     * Number of votes for this score
     *
     * @type {number}
     */
    votes: number;
    /**
     * Percentage of votes for this score
     *
     * @type {number}
     */
    percentage: number;
}
