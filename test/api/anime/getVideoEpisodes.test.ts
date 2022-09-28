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

describe('Anime.getVideoEpisodes ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getVideoEpisodes(anime.id);
            expect(data.length).toBeGreaterThan(0);
            expect(typeof data[0]?.mal_id).toBe('number');
        });

        test('Pagination data', async () => {
            const { pagination } = await Anime.getVideoEpisodes(anime.id);
            expect(typeof pagination.last_visible_page).toBe('number');
            expect(typeof pagination.has_next_page).toBe('boolean');
        });
    });

    describe('error ', () => {
        test('Nonexistent id', async () => {
            expect.assertions(1);
            try {
                await Anime.getVideoEpisodes(NOT_FOUND_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });

        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getVideoEpisodes(INVALID_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
