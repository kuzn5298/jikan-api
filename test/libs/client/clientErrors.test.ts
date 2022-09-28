import axios from 'axios';
import { describe, test } from '@jest/globals';

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

jest.mock('axios');

describe('client', () => {
    const client = new Client();

    test('client (error with status 200)', async () => {
        (axios as any).mockResolvedValue({ data: ERROR });
        try {
            await client.get();
        } catch (err) {
            expect(err).toEqual(ERROR);
        }
    });

    test('client (throw null)', async () => {
        (axios as any).mockRejectedValue(null);
        try {
            await client.get();
        } catch (err) {
            expect(err).toEqual(DEFAULT_ERROR);
        }
    });

    test('client (throw error)', async () => {
        (axios as any).mockRejectedValue(ERROR);
        try {
            await client.get();
        } catch (err) {
            expect(err).not.toEqual(ERROR);
        }
    });
});
