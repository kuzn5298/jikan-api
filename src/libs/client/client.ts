import axios from 'axios';
import Settings from '../settings';
import { Options, Parameters, Paths } from './types';
import { combineOptions, urlBuilder } from './utils';

class Client {
    #defaults!: Options;
    #settings: Settings | undefined;

    constructor(defaults: Options = {}, settings?: Settings) {
        this.#defaults = defaults;
        this.#settings = settings;
    }

    #client(options: Options) {
        return axios(combineOptions(options, this.#defaults));
    }

    async get(paths?: Paths, parameters?: Parameters, options?: Options) {
        const url = urlBuilder(paths);
        const { data } = await this.#client({
            url,
            baseURL: this.#settings?.href,
            parameters,
            ...options,
            method: 'GET',
        });
        return data;
    }
}

export default Client;
