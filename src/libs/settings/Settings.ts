class Settings {
    #URL!: URL;
    #baseURL!: string;
    #version!: number | undefined;

    constructor(baseURL = '', version?: number) {
        const suffix = Settings.#getSuffixByVersion(version);
        this.#baseURL = baseURL;
        this.#version = version;
        this.#URL = new URL(suffix, baseURL);
    }

    // utils
    static #getSuffixByVersion(version?: number) {
        return version ? `v${version}` : '';
    }

    // version

    /**
     * Delivers the currently used API version
     */
    get version() {
        return this.#version;
    }

    /**
     * Change the current API version
     *
     * @param {number} version
     */
    set version(version) {
        this.#version = version;
        const suffix = Settings.#getSuffixByVersion(version);
        this.#URL.pathname = suffix;
    }

    // baseURL

    /**
     * Delivers the current API Base URL
     */
    get baseURL() {
        return this.#baseURL;
    }

    /**
     * Change the current API Base URL
     *
     * @param {string} baseURL
     */
    set baseURL(baseURL: string) {
        const suffix = Settings.#getSuffixByVersion(this.#version);
        this.#baseURL = baseURL;

        this.#URL = new URL(suffix, baseURL);
    }

    // URL

    /**
     * Delivers the full API URL (object)
     */
    get URL() {
        return this.#URL;
    }

    /**
     * Delivers the full API URL (string)
     */
    get href() {
        return this.#URL?.href;
    }
}

export default Settings;
