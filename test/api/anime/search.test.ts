import { describe, expect, test } from '@jest/globals';
import { Anime } from '../../../src/apis';
import { AnimeRating, AnimeSearchRating, AnimeType } from '../../../src/enums';
import { getMockAnime, TIMEOUT_BETWEEN_TESTS } from '../../mock';

beforeEach((done) => {
    setTimeout(done, TIMEOUT_BETWEEN_TESTS);
});

describe('Anime.search ', () => {
    test('Loaded data', async () => {
        const anime = getMockAnime();

        const SEARCH_QUERY = anime.title;
        const { data } = await Anime.search(SEARCH_QUERY);
        expect(data.length).toBeGreaterThan(0);
        const searchedTitles = data.some((anime) => {
            return anime.titles.some(({ title }) =>
                title.toLowerCase().includes(SEARCH_QUERY.toLowerCase())
            );
        });
        expect(searchedTitles).toBeTruthy();
    });

    test('Pagination data', async () => {
        const { pagination } = await Anime.search();

        expect(typeof pagination.last_visible_page).toBe('number');
        expect(typeof pagination.current_page).toBe('number');
        expect(typeof pagination.items.total).toBe('number');
    });

    test('Pagination data (second page)', async () => {
        const SEARCH_QUERY = '';
        const SECOND_PAGE = 2;

        const { pagination } = await Anime.search(SEARCH_QUERY, {
            page: SECOND_PAGE,
        });

        expect(typeof pagination.last_visible_page).toBe('number');
        expect(typeof pagination.items.total).toBe('number');
        expect(pagination.current_page).toBe(SECOND_PAGE);
    });

    test('Loaded data (invalid search query)', async () => {
        const SEARCH_QUERY = 'qwery12345';

        const { data } = await Anime.search(SEARCH_QUERY);

        expect(data.length).toBe(0);
    });

    test('Loaded data (filter type)', async () => {
        const SEARCH_QUERY = '';

        const { data } = await Anime.search(SEARCH_QUERY, {
            type: AnimeType.MOVIE,
        });

        const isMovieTypes = data.every(({ type }) => type === AnimeType.MOVIE);

        expect(data.length).toBeGreaterThan(0);
        expect(isMovieTypes).toBeTruthy();
    });

    test('Loaded data (filter limit)', async () => {
        const SEARCH_QUERY = '';
        const LIMIT = 5;

        const { data, pagination } = await Anime.search(SEARCH_QUERY, {
            limit: LIMIT,
        });

        expect(data.length).toBeLessThanOrEqual(LIMIT);
        expect(pagination.items.per_page).toBe(LIMIT);
    });

    test('Loaded data (filter range score)', async () => {
        const SEARCH_QUERY = '';
        const MIN_SCORE = 6;
        const MAX_SCORE = 7;

        const { data } = await Anime.search(SEARCH_QUERY, {
            min_score: MIN_SCORE,
            max_score: MAX_SCORE,
        });

        const isValidScore = data.every(
            ({ score }) => score && score > MIN_SCORE && score < MAX_SCORE
        );

        expect(data.length).toBeGreaterThan(0);
        expect(isValidScore).toBeTruthy();
    });

    test('Loaded data (filter rating)', async () => {
        const SEARCH_QUERY = '';

        const { data } = await Anime.search(SEARCH_QUERY, {
            rating: AnimeSearchRating.R,
        });

        const isValidRating = data.every(
            ({ rating }) => rating && rating === AnimeRating.R
        );

        expect(data.length).toBeGreaterThan(0);
        expect(isValidRating).toBeTruthy();
    });
});
