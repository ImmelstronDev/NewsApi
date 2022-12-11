import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b59bf9591e1245e6a5722d76fa846aff', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
