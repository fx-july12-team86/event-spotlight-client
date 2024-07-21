// import { useState } from 'react';
import { ProductList } from '../../../widgets/ProductList';
import { SearchBar } from '../../../widgets/SearchBar';
import { Slider } from '../../../widgets/Slider';
import './HomePage.scss';
import { EventType } from '../../../entities/Event/types';
import { MyButtonLarge } from '../../../shared/ui/MyButtonLarge/MyButtonLarge';
import { Organizator } from './components/Organizator/Organizator';

const events: EventType[] = [
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
];

export const HomePage = () => {
  // const [events, setEvents] = useState([]);
  return (
    <div className="HomePage">
      <Slider />

      <section>
        <h1 className="HomePage__title">
          ЗНАЙДИ <span>ПОДІЮ</span> ДЛЯ СЕБЕ
        </h1>

        <div className="HomePage__searchBar">
          <SearchBar />
        </div>

        <ProductList events={events} />
      </section>

      <section className="HomePage__toplist">
        <h2 className="HomePage__title--h2">
          TOП ПОДІЇ <span>КИЇВ</span>
        </h2>

        <ProductList events={eventsToр} />

        <MyButtonLarge className="HomePage__btn--purple">
          Більше подій
        </MyButtonLarge>
      </section>

      <section className="HomePage__toplist">
        <h2 className="HomePage__title--h2">
          Онлайн <span>події</span>
        </h2>

        <ProductList events={eventsToр} />

        <MyButtonLarge className="HomePage__btn--purple">
          Більше подій
        </MyButtonLarge>
      </section>

      <Organizator />

      <section className="HomePage__closestlist">
        <h2 className="HomePage__title--h2">
          <span>найближчі</span> події
        </h2>

        <ProductList events={eventsToр} />

        <MyButtonLarge className="HomePage__btn--purple">
          Більше подій
        </MyButtonLarge>
      </section>
    </div>
  );
};
