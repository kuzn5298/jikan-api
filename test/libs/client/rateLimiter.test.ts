import { describe, expect, test } from '@jest/globals';

import RateLimiter, {
    DEFAULT_MAX_REQUESTS,
    DEFAULT_PER_MILLISECONDS,
} from '../../../src/libs/rateLimiter';

import { TIMEOUT_BETWEEN_TESTS } from '../../mock';

const MAX_REQUESTS = 3;
const PER_MILLISECONDS = 5000;

beforeEach((done) => {
    setTimeout(done, TIMEOUT_BETWEEN_TESTS);
});

describe('Rate Limiter', () => {
    test('Init with params', () => {
        const rateLimiter = new RateLimiter({
            maxRequests: MAX_REQUESTS,
            perMilliseconds: PER_MILLISECONDS,
        });

        const { tokensPerInterval, interval } = rateLimiter.limiter.tokenBucket;
        expect(tokensPerInterval).toBe(MAX_REQUESTS);
        expect(interval).toBe(PER_MILLISECONDS);
    });

    test('Init without params', () => {
        const rateLimiter = new RateLimiter();

        const { tokensPerInterval, interval } = rateLimiter.limiter.tokenBucket;
        expect(tokensPerInterval).toBe(DEFAULT_MAX_REQUESTS);
        expect(interval).toBe(DEFAULT_PER_MILLISECONDS);
    });

    test('call', () => {
        const rateLimiter = new RateLimiter({
            maxRequests: MAX_REQUESTS,
            perMilliseconds: PER_MILLISECONDS,
        });
        expect(rateLimiter.limiter.tokenBucket.content).toBe(MAX_REQUESTS);
        rateLimiter.call();

        expect(Math.round(rateLimiter.limiter.tokenBucket.content)).toBe(
            MAX_REQUESTS - 1
        );
        rateLimiter.call();

        expect(Math.round(rateLimiter.limiter.tokenBucket.content)).toBe(
            MAX_REQUESTS - 2
        );
    });
});
