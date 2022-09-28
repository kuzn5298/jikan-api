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

describe('Anime.getStreaming ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getStreaming(anime.id);
            expect(data.length).toBeGreaterThan(0);
            expect(typeof data[0]?.name).toBe('string');
        });
    });

    describe('error ', () => {
        test('Nonexistent id', async () => {
            expect.assertions(1);
            try {
                await Anime.getStreaming(NOT_FOUND_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });

        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getStreaming(INVALID_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
