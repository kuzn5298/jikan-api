import { describe, expect, test } from '@jest/globals';
import { client } from '../../../src/libs';

import {
    getMockAnime,
    getMockAnimeList,
    INVALID_ANIME_ID,
    TIMEOUT_BETWEEN_TESTS,
} from '../../mock';

beforeEach((done) => {
    setTimeout(done, TIMEOUT_BETWEEN_TESTS);
});

describe('client', () => {
    const anime = getMockAnime();

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

    test('client (rate-limit)', async () => {
        const MAX_LIST_LENGTH = 5;
        const animeList = getMockAnimeList().slice(0, MAX_LIST_LENGTH);
        const promiseList = await Promise.all(
            animeList.map(async ({ id }) => {
                const anime = await client.get(['anime', id]);
                return anime?.data;
            })
        );

        const ACTUAL_IDS = promiseList.map((anime) => anime?.mal_id);
        const EXPECT_IDS = animeList.map((anime) => anime?.id);
        expect(ACTUAL_IDS).toEqual(EXPECT_IDS);
    });
});
