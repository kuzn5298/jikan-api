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

describe('Anime.getStatistics ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getStatistics(anime.id);
            expect(data.completed).toBeGreaterThan(0);
            expect(data.total).toBeGreaterThan(0);
            expect(data.scores.length).toBeGreaterThan(0);
        });
    });

    describe('error ', () => {
        test('Nonexistent id', async () => {
            expect.assertions(1);
            try {
                await Anime.getStatistics(NOT_FOUND_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });

        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getStatistics(INVALID_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
