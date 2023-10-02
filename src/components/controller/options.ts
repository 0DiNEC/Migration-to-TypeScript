export type TOption = {
    apiKey: string;
    sources?: string;
};

export enum Endpoints {
    everything = 'Everything',
    sources = 'Sources',
}

export enum ErrorCode {
    unauthorized = 401,
    notFound = 404,
}
