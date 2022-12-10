export interface source {
    id: string;
    name: string;
}

export interface news {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface sourceView {
    sources: source[];
    status: string;
}

export interface newsView {
    articles: news[];
    status: string;
    totalResults: number;
}
