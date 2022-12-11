export type loaderOptions = {
    [prop: string]: string;
};

export type getRespData = {
    endpoint: string;
    options?: loaderOptions;
};

export type callback<T> = (data?: T) => void;
