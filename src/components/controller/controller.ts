import AppLoader from './appLoader';
import { Endpoints } from './options';

type T1 = <T>(data?: T) => void;

class AppController extends AppLoader {
    getSources(callback: T1): void {
        super.getResp(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: T1): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;
        if (!(newsContainer instanceof HTMLElement)) return;

        while (target !== newsContainer) {
            if (!(target instanceof HTMLElement)) return;
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId)
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: Endpoints.everything,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
