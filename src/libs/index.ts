import {
    DEFAULT_BASE_URL,
    DEFAULT_REQUEST_TIMEOUT,
    DEFAULT_VERSION,
    MAX_REQUESTS,
    PER_MILLISECONDS,
} from '../constants';
import Settings from './settings';
import Client from './client';
import RateLimiter from './rateLimiter';

const options = {
    timeout: DEFAULT_REQUEST_TIMEOUT,
};

export const limiter = new RateLimiter({
    maxRequests: MAX_REQUESTS,
    perMilliseconds: PER_MILLISECONDS,
});

export const settings = new Settings(DEFAULT_BASE_URL, DEFAULT_VERSION);

export const client = new Client({ options, settings, limiter });
