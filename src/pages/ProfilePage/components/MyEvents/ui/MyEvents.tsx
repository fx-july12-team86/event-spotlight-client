import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './MyEvents.scss';
import { ProductList } from '../../../../../widgets/ProductList';
import { EventType } from '../../../../../entities/Event/types';

type TabType = 'active' | 'suspended' | 'moderate' | 'archive';

const TABS: { id: TabType; title: string }[] = [
  { id: 'active', title: 'Активні' },
  { id: 'suspended', title: 'ПРИЗУПИНЕНІ' },
  { id: 'moderate', title: 'МОДЕРАЦІЇ' },
  { id: 'archive', title: 'АРХІВ' },
];
const eventsToр: EventType[] = [
  {
    id: 1,
    category: 'Майстер-класс',
    favorite: false,
    title: 'Майстер-клас з миловаріння',
    img: 'slider/product_1.webp',
    options: {
      date: '01/01.2024',
      time: '13-00',
      address: 'Art studio “Lila”, Київ',
      price: 350,
      city: 'Київ',
    },
  },
  {
    id: 2,
    category: 'Майстер-класс',
    favorite: false,
    title: 'Майстер-клас з миловаріння',
    img: 'slider/product_1.webp',
    options: {
      date: '01/01.2024',
      time: '13-00',
      address: 'Art studio “Lila”, Київ',
      price: 350,
      city: 'Київ',
    },
  },
];

export const MyEvents = () => {
  const [tab, setTab] = useState<TabType>('active');

  return (
    <div className="MyEvents">
      <nav className="MyEvents__breadcrumbs">
        <Link to="/" className="MyEvents__breadcrumbs-item">
          Мій профіль
        </Link>

        <button className="MyEvents__breadcrumbs-item">Мої події</button>
      </nav>

      <h1 className="MyEvents__title">Мої події</h1>

      <main className="MyEvents__main">
        <nav className="MyEvents__tabs">
          {TABS.map((t) => (
            <p
              key={t.id}
              className={cn('MyEvents__tabs-item', {
                'MyEvents__tabs-item--active': t.id === tab,
              })}
              onClick={() => setTab(t.id)}
            >
              {t.title}
            </p>
          ))}
        </nav>

        <div className="Favorite__list">
          <ProductList events={eventsToр} addButton={true} />
        </div>
      </main>
    </div>
  );
};
