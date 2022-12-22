import { MAX_NEWS, SEPARATOR, START } from '../../../constants';
import { NewsData } from '../../../interfaces';
import './news.css';

class News {
    draw(data: NewsData[]) {
        const news = data.length >= MAX_NEWS ? data.filter((_item, idx) => idx < MAX_NEWS) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(START, MAX_NEWS)
                .split(SEPARATOR)
                .reverse()
                .join(SEPARATOR);

            (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLElement).textContent = item.description;
            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).textContent = '';
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
