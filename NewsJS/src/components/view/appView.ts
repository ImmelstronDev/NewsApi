import { NewsView, SourceView } from '../../interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsView) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: SourceView) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
