/**
 * Date range
 */
export interface Aired {
    /**
     * Date ISO8601
     *
     * @type {string}
     */
    from: string;
    /**
     * Date ISO8601
     *
     * @type {string}
     */
    to: string;
    /**
     * Date Prop
     *
     * @type {AiredProp}
     */
    prop: AiredProp;
}

/**
 * Date Prop
 */
export interface AiredProp {
    /**
     * @type {AiredPropDate}
     */
    from: AiredPropDate;
    /**
     * @type {AiredPropDate}
     */
    to: AiredPropDate;
    /**
     * Raw parsed string
     *
     * @type {string}
     */
    string: string;
}

/**
 * Date Prop Date
 */
export interface AiredPropDate {
    /**
     * Day
     *
     * @type {number}
     */
    day: number;
    /**
     * Month
     *
     * @type {number}
     */
    month: number;
    /**
     * Year
     *
     * @type {number}
     */
    year: number;
}
