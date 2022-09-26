/**
 * Broadcast Details
 */
export interface Broadcast {
    /**
     * Day of the week
     *
     * @type {string}
     */
    day: string;
    /**
     * Time in 24 hour format
     *
     * @type {string}
     */
    time: string;
    /**
     * Timezone (Tz Database format)
     *
     * @type {string}
     * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     */
    timezone: string;
    /**
     * Raw parsed broadcast string
     *
     * @type {string}
     */
    string: string;
}
