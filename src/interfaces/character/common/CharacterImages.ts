export interface CharacterImages {
    /**
     * @type {CharacterImagesData}
     */
    jpg: CharacterImagesData;
    /**
     * @type {CharacterImagesData}
     */
    webp: CharacterImagesData;
}

export interface CharacterImagesData {
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
}
