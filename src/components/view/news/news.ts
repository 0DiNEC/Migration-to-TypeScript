import './news.css';
import { dataArticles } from '../../ApiData';
class News {
    public draw(data: dataArticles[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        if (!newsItemTemp) return;

        let cloneNode: HTMLElement | null;

        news.forEach((item: dataArticles, idx: number) => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                cloneNode = newsClone.querySelector('.news__item');
                if (cloneNode) cloneNode.classList.add('alt');
            }

            cloneNode = newsClone.querySelector('.news__meta-photo');
            if (cloneNode) {
                // If we have a photo then we have another elements to clone
                cloneNode.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
                newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                newsClone.querySelector('.news__description-title')!.textContent = item.title;
                newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
                newsClone.querySelector('.news__description-content')!.textContent = item.description;
                newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        cloneNode = document.querySelector('.news');
        if (cloneNode) {
            cloneNode.innerHTML = '';
            cloneNode.appendChild(fragment);
        }
    }
}

export default News;
