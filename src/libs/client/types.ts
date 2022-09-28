export interface Parameters {
    [key: string]:
        | string
        | number
        | boolean
        | null
        | undefined
        | [string | number];
}

export interface Headers {
    [key: string]: string | number | boolean;
}

export interface Options {
    url?: string;
    baseURL?: string;
    parameters?: Parameters;
    headers?: Headers;
    method?: 'GET';
    timeout?: number;
}

export type Paths = Array<string | number> | string | number;
