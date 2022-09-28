import { describe, expect, test } from '@jest/globals';
import { Anime } from '../../../src/apis';
import { AnimeForumFilter } from '../../../src/enums';
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

describe('Anime.getForum ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getForum(anime.id);
            expect(data.length).toBeGreaterThan(0);
            expect(typeof data[0].mal_id).toBe('number');
        });

        test('Loaded data (episode filter)', async () => {
            const { data } = await Anime.getForum(
                anime.id,
                AnimeForumFilter.EPISODE
            );
            const isArrayEpisodes = data.every((forum) => {
                return forum.title
                    .toLowerCase()
                    .includes(AnimeForumFilter.EPISODE);
            });
            expect(data.length).toBeGreaterThan(0);
            expect(isArrayEpisodes).toBeTruthy();
        });

        test('Loaded data (other filter)', async () => {
            const { data } = await Anime.getForum(
                anime.id,
                AnimeForumFilter.OTHER
            );
            const isArrayEpisodes = data.every((forum) => {
                return forum.title
                    .toLowerCase()
                    .includes(AnimeForumFilter.EPISODE);
            });
            expect(data.length).toBeGreaterThan(0);
            expect(isArrayEpisodes).toBeFalsy();
        });
    });

    describe('error ', () => {
        test('Nonexistent id', async () => {
            expect.assertions(1);
            try {
                await Anime.getForum(NOT_FOUND_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });

        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getForum(INVALID_ANIME_ID);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
