export interface AnimeImages {
    /**
     * @type {AnimeImagesData}
     */
    jpg: AnimeImagesData;
    /**
     * @type {AnimeImagesData}
     */
    webp: AnimeImagesData;
}

export interface AnimeImagesData {
    /**
     * Image URL
     *
     * @type {string}
     */
    image_url: string;
    /**
     * Small Image URL
     *
     * @type {string}
     */
    small_image_url: string;
    /**
     * Image URL
     *
     * @type {string}
     */
    large_image_url: string;
}
