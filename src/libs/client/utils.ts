import { AxiosRequestConfig } from 'axios';
import { Options, Paths } from './types';

export const urlBuilder = (paths: Paths = []) => {
    return Array.isArray(paths)
        ? paths.filter((x) => x).join('/')
        : String(paths);
};

export const combineOptions = (
    options: Options,
    defaults: Options
): AxiosRequestConfig => {
    const headers = {
        ...defaults.headers,
        ...options.headers,
    };

    return {
        ...defaults,
        ...options,
        params: defaults?.parameters ?? options.parameters,
        headers,
    };
};
