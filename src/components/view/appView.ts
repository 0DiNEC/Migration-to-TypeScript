import News from './news/news';
import Sources from './sources/sources';
import { dataArticles, dataSource, IDataArticles, IDataSource } from '../ApiData';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataArticles): void {
        const values: dataArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSource) {
        const values: dataSource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
