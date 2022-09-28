import { describe, expect, test } from '@jest/globals';
import { Anime } from '../../../src/apis';
import {
    getMockAnime,
    INVALID_ANIME_ID,
    NOT_FOUND_ANIME_ID,
    NOT_FOUND_CODE,
    TIMEOUT_BETWEEN_TESTS,
} from '../../mock';

beforeEach((done) => {
    setTimeout(done, TIMEOUT_BETWEEN_TESTS);
});

describe('Anime.getAnimeFull ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getAnimeFull(anime.id);
            expect(data.mal_id).toBe(anime.id);
            expect(data.external).not.toBeUndefined();
        });
    });

    describe('error ', () => {
        test('Nonexistent id', async () => {
            expect.assertions(1);
            try {
                await Anime.getAnimeFull(NOT_FOUND_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });

        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getAnimeFull(INVALID_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
