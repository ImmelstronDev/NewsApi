import { LAST_INDEX, START } from '../../constants';
import { StatusErrors } from '../../enums';
import { callback, getRespData, loaderOptions } from '../../types';

class Loader {
    private readonly baseLink: string;
    private readonly options: loaderOptions;
    constructor(baseLink: string, options: loaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: getRespData,
        callback: callback<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === StatusErrors.unauthorized || res.status === StatusErrors.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: loaderOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(START, LAST_INDEX);
    }

    private load<T>(method: string, endpoint: string, callback: callback<T>, options: loaderOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
