export type dataSource = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

export type dataArticles = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export interface IDataArticles {
    status: string;
    totalResult: string;
    articles: dataArticles[];
}

export interface IDataSource {
    status: string;
    sources: dataSource[];
}
