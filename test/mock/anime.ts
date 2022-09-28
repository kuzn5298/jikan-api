import { getRandomElement } from './helpers';

export const NOT_FOUND_ANIME_ID = 1_000_000_000;
export const INVALID_ANIME_ID = -1;

const MOCK_ANIME_LIST = [
    {
        id: 1,
        title: 'Cowboy Bebop',
    },
    {
        id: 20,
        title: 'Naruto',
    },
    {
        id: 21,
        title: 'One Piece',
    },
    {
        id: 918,
        title: 'Gintama',
    },
    {
        id: 11061,
        title: 'Hunter x Hunter',
    },
];

export const getMockAnime = () => getRandomElement(MOCK_ANIME_LIST);
