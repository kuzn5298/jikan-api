import {
    DEFAULT_BASE_URL,
    DEFAULT_REQUEST_TIMEOUT,
    DEFAULT_VERSION,
} from '../constants';
import Settings from './settings';
import Client from './client';

export const settings = new Settings(DEFAULT_BASE_URL, DEFAULT_VERSION);

export const client = new Client(
    {
        timeout: DEFAULT_REQUEST_TIMEOUT,
    },
    settings
);
