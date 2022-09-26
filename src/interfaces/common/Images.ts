export interface Images {
    /**
     * @type {ImagesData}
     */
    jpg: ImagesData;
}

/**
 * Available images
 */
export interface ImagesData {
    /**
     * Image
     *
     * @type {string}
     */
    image_url: string;
}

export interface UserImages {
    /**
     * @type {UserImagesData}
     */
    jpg: UserImagesData;
    /**
     * @type {UserImagesData}
     */
    webp: UserImagesData;
}

/**
 * Available images
 */
export interface UserImagesData {
    /**
     * Image URL
     *
     * @type {string}
     */
    image_url: string;
}
