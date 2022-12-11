import { newsView, sourceView } from '../../interfaces';
import { callback } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: callback<sourceView>) {
        super.getResp<sourceView>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: callback<newsView>) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<newsView>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
