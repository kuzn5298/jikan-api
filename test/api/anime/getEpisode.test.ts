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

const FIRST_EPISODE_NUMBER = 1;
const INVALID_EPISODE_NUMBER = -1;

describe('Anime.getEpisode ', () => {
    describe('success ', () => {
        const anime = getMockAnime();
        test('Loaded data', async () => {
            const { data } = await Anime.getEpisode(
                anime.id,
                FIRST_EPISODE_NUMBER
            );
            expect(data?.mal_id).toBe(FIRST_EPISODE_NUMBER);
        });
    });

    describe('error ', () => {
        const anime = getMockAnime();

        test('Invalid id', async () => {
            expect.assertions(1);
            try {
                await Anime.getEpisode(INVALID_ANIME_ID, FIRST_EPISODE_NUMBER);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });

        test('Invalid episode number', async () => {
            expect.assertions(1);
            try {
                await Anime.getEpisode(anime.id, INVALID_EPISODE_NUMBER);
            } catch (e: any) {
                expect(e.status).toBe(NOT_FOUND_CODE);
            }
        });
    });
});
