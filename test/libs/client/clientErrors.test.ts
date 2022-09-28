import { describe, test } from '@jest/globals';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Client from '../../../src/libs/client';

const ERROR = {
    status: 404,
    type: 'Error',
    message: 'Not Found',
    error: null,
};

const DEFAULT_ERROR = {
    status: 400,
    message: 'Bad Request',
};

describe('client', () => {
    let mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset();
    });

    const client = new Client();

    test('client (error with status 200)', async () => {
        const SUCCESS_ERROR = 'success_error';
        mock.onGet(SUCCESS_ERROR).reply(200, ERROR);
        expect.assertions(1);
        try {
            await client.get(SUCCESS_ERROR);
        } catch (err) {
            expect(err).toEqual(ERROR);
        }
    });

    test('client (throw null)', async () => {
        const NULL_ERROR = 'null_error';
        mock.onGet(NULL_ERROR).reply(404, null);
        expect.assertions(1);

        try {
            await client.get(NULL_ERROR);
        } catch (err) {
            expect(err).toEqual(DEFAULT_ERROR);
        }
    });

    test('client (throw error)', async () => {
        const NULL_ERROR = 'throw_error';
        mock.onGet(NULL_ERROR).reply(404, ERROR);
        expect.assertions(1);

        try {
            await client.get(NULL_ERROR);
        } catch (err) {
            expect(err).toEqual(ERROR);
        }
    });
});
