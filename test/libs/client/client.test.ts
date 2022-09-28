import { describe, expect, test } from '@jest/globals';

import Settings from '../../../src/libs/settings';
import Client from '../../../src/libs/client';
import { DEFAULT_BASE_URL, DEFAULT_VERSION } from '../../../src/constants';
import { getMockAnime, INVALID_ANIME_ID } from '../../mock';

const BASE_URL = DEFAULT_BASE_URL;
const VERSION = DEFAULT_VERSION;

describe('client', () => {
    const anime = getMockAnime();

    const settings = new Settings(BASE_URL, VERSION);
    const client = new Client({}, settings);

    test('client (fetch)', async () => {
        const { data } = await client.get(`anime/${anime.id}`);
        expect(data.mal_id).toBe(anime.id);
    });

    test('client (fetch error)', async () => {
        try {
            await client.get(`anime/${INVALID_ANIME_ID}`);
        } catch (e) {
            expect(e).toBeDefined();
        }
    });
});
