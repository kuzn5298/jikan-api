import { describe, expect, test } from '@jest/globals';

import {
    combineOptions,
    isError,
    urlBuilder,
} from '../../../src/libs/client/utils';

const ERROR = {
    status: 404,
    type: 'Error',
    message: 'Not Found',
    error: null,
};

const NOT_ERROR = {
    test: 'test',
};

describe('client utils', () => {
    test('urlBuilder', () => {
        const PROPS_URL_BUILDER_1 = ['test1', 'test2', 3];
        const PROPS_URL_BUILDER_2 = 'test1';

        expect(urlBuilder(PROPS_URL_BUILDER_1)).toBe(
            PROPS_URL_BUILDER_1.join('/')
        );
        expect(urlBuilder(PROPS_URL_BUILDER_2)).toBe(PROPS_URL_BUILDER_2);
        expect(urlBuilder()).toBe('');
    });

    test('combineOptions', () => {
        const OPTIONS = {
            url: 'test',
            baseURL: 'http://localhost:8080',
            parameters: {
                test1: 'test1_options',
                test2: 'test2_options',
            },
            headers: {
                test2: 'test2_options',
                test3: 'test3_options',
            },
        };

        const DEFAULT = {
            url: 'test2',
            baseURL: 'http://localhost:8081',
            timeout: 500,
            parameters: {
                test2: 'test2_default',
                test3: 'test3_default',
            },
            headers: {
                test1: 'test1_default',
                test2: 'test2_default',
            },
        };

        const EXPECTED = {
            url: 'test',
            baseURL: 'http://localhost:8080',
            timeout: 500,
            params: {
                test1: 'test1_options',
                test2: 'test2_options',
                test3: 'test3_default',
            },
            headers: {
                test1: 'test1_default',
                test2: 'test2_options',
                test3: 'test3_options',
            },
        };
        expect(combineOptions(OPTIONS, DEFAULT)).toEqual(EXPECTED);
    });

    test('isError', () => {
        expect(isError(ERROR)).toBeTruthy();
        expect(isError(NOT_ERROR)).toBeFalsy();
    });
});
