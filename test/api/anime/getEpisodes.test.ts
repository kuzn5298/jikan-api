import { describe, expect, test } from '@jest/globals';
import { Anime } from '../../../src/apis';
import {
    getMockAnime,
    INVALID_ANIME_ID,
    NOT_FOUND_CODE,
    TIMEOUT_BETWEEN_TESTS,
} from '../../mock';

beforeEach((done) => {
    setTimeout(done, TIMEOUT_BETWEEN_TESTS);
});

describe('Anime.getEpisodes ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getEpisodes(anime.id);
            expect(data.length).toBeGreaterThan(0);
            expect(typeof data[0]?.mal_id).toBe('number');
        });

        test('Pagination data', async () => {
            const { pagination } = await Anime.getEpisodes(anime.id);
            expect(typeof pagination.last_visible_page).toBe('number');
            expect(typeof pagination.has_next_page).toBe('boolean');
        });
    });

    describe('error ', () => {
        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getEpisodes(INVALID_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
