import { describe, expect, test } from '@jest/globals';
import Settings from '../../../src/libs/settings';

const BASE_URL = 'http://example.com';
const VERSION = 2;

describe('settings', () => {
    const settings = new Settings(BASE_URL, VERSION);

    test('get baseURL', () => {
        expect(settings.baseURL).toBe(BASE_URL);
    });

    test('set baseURL', () => {
        const NEW_BASE_URL = 'http://example2.com';
        settings.baseURL = NEW_BASE_URL;
        expect(settings.baseURL).toBe(NEW_BASE_URL);
        settings.baseURL = BASE_URL;
        expect(settings.baseURL).toBe(BASE_URL);
    });

    test('get version', () => {
        expect(settings.version).toBe(VERSION);
    });

    test('set version', () => {
        const NEW_VERSION = 3;
        settings.version = NEW_VERSION;
        expect(settings.version).toBe(NEW_VERSION);
        settings.version = VERSION;
        expect(settings.version).toBe(VERSION);
    });

    test('set version undefined', () => {
        settings.version = undefined;
        expect(settings.version).toBe(undefined);
        expect(settings.URL?.pathname).toBe('/');
        settings.version = VERSION;
        expect(settings.version).toBe(VERSION);
    });

    test('get href', () => {
        const href = `${BASE_URL}/v${VERSION}`;
        expect(settings.href).toBe(href);
    });

    test('get URL', () => {
        const url = new URL(`v${VERSION}`, BASE_URL);

        expect(settings.URL).toEqual(url);
    });
});
