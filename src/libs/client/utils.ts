import { AxiosRequestConfig } from 'axios';
import { Options, Paths } from './types';

export const urlBuilder = (paths: Paths = []) => {
    return Array.isArray(paths)
        ? paths.filter((x) => x).join('/')
        : String(paths);
};

export const combineOptions = (
    options: Options,
    defaults: Options = {}
): AxiosRequestConfig => {
    const headers = {
        ...defaults.headers,
        ...options.headers,
    };

    const params = {
        ...defaults.parameters,
        ...options.parameters,
    };

    const config = {
        ...defaults,
        ...options,
    };

    if (Object.keys(headers).length) {
        config.headers = headers;
    }
    if (Object.keys(params).length) {
        (config as AxiosRequestConfig).params = params;
    }

    delete config.parameters;

    return config;
};

export const isError = (e: any) => {
    return Boolean(
        e &&
            typeof e.status === 'number' &&
            typeof e.type === 'string' &&
            typeof e.message === 'string' &&
            (typeof e.error === 'string' || e.error === null)
    );
};
