import './sources.css';
import { dataSource } from '../../ApiData';

class Sources {
    public draw(data: dataSource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector(
            '#sourceItemTemp'
        ) as HTMLTemplateElement | null;
        if (!sourceItemTemp) return;

        let cloneNode: HTMLElement | null;
        data.forEach((item: dataSource) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            cloneNode = sourceClone.querySelector('.source__item-name');
            if (cloneNode) cloneNode.textContent = item.name;
            cloneNode = sourceClone.querySelector('.source__item');
            if (cloneNode) cloneNode.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        cloneNode = document.querySelector('.sources');
        if (cloneNode) cloneNode.append(fragment);
    }
}

export default Sources;
