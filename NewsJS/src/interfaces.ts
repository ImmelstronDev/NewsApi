export interface Source {
    id: string;
    name: string;
}

export interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourceView {
    sources: Source[];
    status: string;
}

export interface NewsView {
    articles: NewsData[];
    status: string;
    totalResults: number;
}
