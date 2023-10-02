import { TOption, Endpoints, ErrorCode } from './options';

class Loader {
    private baseLink: string;
    private options: TOption;

    constructor(baseLink: string, options: TOption) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: Partial<TOption> },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === ErrorCode.unauthorized || res.status === ErrorCode.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Partial<TOption>, endpoint: Endpoints) {
        const urlOptions: TOption = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof TOption]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string = 'GET',
        endpoint: Endpoints,
        callback: <T>(data: T) => void,
        options: Partial<TOption> = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
