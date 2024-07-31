import './CatalogPage.scss';
import { SearchBar } from '../../../widgets/SearchBar';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { BreadcrumbsCatalog } from './components/Breadcrumbs/BreadcrumbsCatalog';
import { MonthEvents } from './components/MonthEvents/MonthEvents';
import { EventType } from '../../../entities/Event/types';
import { MyPagination } from '../../../shared/ui';

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
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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

export const CatalogPage = () => {
  const { location } = useAppSelector((state) => state.user);
  return (
    <div className="CatalogPage">
      <div className="CatalogPage__breadcrumbs">
        <BreadcrumbsCatalog />
      </div>

      <h1 className="CatalogPage__title">Події {location}</h1>

      <div className="CatalogPage__search-bar">
        <SearchBar />
      </div>

      <section className="CatalogPage__main">
        <div className="CatalogPage__list">
          {['липень', 'серпень', 'вересень'].map((m) => (
            <MonthEvents key={m} events={events} month={`${m} 2024`} />
          ))}
        </div>

        <MyPagination />
      </section>
    </div>
  );
};
