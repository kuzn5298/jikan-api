import { RateLimiter as Limiter } from 'limiter';

interface LimiterOptions {
    perMilliseconds?: number;
    maxRequests?: number;
}

export const DEFAULT_MAX_REQUESTS = 1;
export const DEFAULT_PER_MILLISECONDS = 1000;

class RateLimiter {
    #limiter!: Limiter;

    constructor({ maxRequests, perMilliseconds }: LimiterOptions = {}) {
        this.setLimiter({ maxRequests, perMilliseconds });
    }

    get limiter(): Limiter {
        return this.#limiter;
    }

    setLimiter({
        maxRequests = DEFAULT_MAX_REQUESTS,
        perMilliseconds = DEFAULT_PER_MILLISECONDS,
    }: LimiterOptions) {
        this.#limiter = new Limiter({
            tokensPerInterval: maxRequests,
            interval: perMilliseconds,
        });
    }

    async call() {
        await this.limiter.removeTokens(1);
    }
}

export default RateLimiter;
