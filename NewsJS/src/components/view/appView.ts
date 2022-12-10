import { newsView, sourceView } from '../../interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: newsView) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: sourceView) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
