import axios from 'axios';
import Settings from '../settings';
import { Options, Parameters, Paths } from './types';
import { combineOptions, isError, urlBuilder } from './utils';

const DEFAULT_ERROR = {
    status: 400,
    message: 'Bad Request',
};
class Client {
    #defaults!: Options;
    #settings: Settings | undefined;

    constructor(defaults: Options = {}, settings?: Settings) {
        this.#defaults = defaults;
        this.#settings = settings;
    }

    async #client(options: Options) {
        try {
            const { data } = await axios(
                combineOptions(options, this.#defaults)
            );
            if (isError(data)) {
                throw {
                    response: {
                        data,
                    },
                };
            }
            return { data };
        } catch (e: any) {
            throw e?.response?.data ?? DEFAULT_ERROR;
        }
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
