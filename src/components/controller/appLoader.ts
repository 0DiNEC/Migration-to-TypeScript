import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'c6bafb18876d46bd96ef387021893766',
        });
    }
}

export default AppLoader;
