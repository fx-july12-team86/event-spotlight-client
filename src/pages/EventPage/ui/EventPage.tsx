import { EventType } from '../../../entities/Event/types';
import { BreadcrumbsEvent } from './components/Breadcrumbs/BreadcrumbsEvent';
import { EventDetails } from './components/EventDetails/ui/EventDetails';
import { FirstScreen } from './components/FirstScreen/FirstScreen';
import { SimilarEvents } from './components/SimilarEvents/SimilarEvents';
import './EventPage.scss';

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
];

export const EventPage = () => {
  return (
    <div className="EventPage">
      <div className="EventPage__breadCrumbs">
        <BreadcrumbsEvent title={'Майстер-клас з миловаріння'} />
      </div>

      <div className="EventPage__firstScreen">
        <FirstScreen />

        <EventDetails />
      </div>

      <SimilarEvents eventsToр={eventsToр} />
    </div>
  );
};
