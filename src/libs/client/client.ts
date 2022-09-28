import axios, { AxiosInstance } from 'axios';
import Settings from '../settings';
import RateLimiter from '../rateLimiter';
import { ClientOptions, Options, Parameters, Paths } from './types';
import { combineOptions, isError, urlBuilder } from './utils';

const DEFAULT_ERROR = {
    status: 400,
    message: 'Bad Request',
};

class Client {
    #http!: AxiosInstance;
    #defaults?: Options;
    #settings?: Settings;
    #limiter?: RateLimiter;

    constructor({ options, settings, limiter }: ClientOptions = {}) {
        this.#defaults = options;
        this.#settings = settings;
        this.#limiter = limiter;
        this.#http = axios.create();
    }

    async #client(options: Options) {
        await this.#limiter?.call();
        try {
            const { data } = await this.#http(
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
            throw e.response.data ?? DEFAULT_ERROR;
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
