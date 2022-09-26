/**
 * Youtube Details
 */
export interface Trailer {
    /**
     * YouTube ID
     *
     * @type {string}
     */
    youtube_id: string;
    /**
     * YouTube URL
     *
     * @type {string}
     */
    url: string;
    /**
     * Parsed Embed URL
     *
     * @type {string}
     */
    embed_url: string;
    /**
     * @type {TrailerImages}
     */
    images: TrailerImages;
}

/**
 * Trailer images
 */
export interface TrailerImages {
    /**
     * Default Image Size URL (120x90)
     *
     * @type {string}
     */
    image_url: string;
    /**
     * Small Image Size URL (640x480)
     *
     * @type {string}
     */
    small_image_url: string;
    /**
     * Medium Image Size URL (320x180)
     *
     * @type {string}
     */
    medium_image_url: string;
    /**
     * Large Image Size URL (480x360)
     *
     * @type {string}
     */
    large_image_url: string;
    /**
     * Maximum Image Size URL (1280x720)
     *
     * @type {string}
     */
    maximum_image_url: string;
}
