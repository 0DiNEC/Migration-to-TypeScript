import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataSource, IDataArticles } from '../ApiData';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const source: HTMLElement | null = document.querySelector('.sources');
        if (!source) return;

        source.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => this.view.drawNews(<IDataArticles>data))
        );
        this.controller.getSources((data) => this.view.drawSources(<IDataSource>data));
    }
}

export default App;
