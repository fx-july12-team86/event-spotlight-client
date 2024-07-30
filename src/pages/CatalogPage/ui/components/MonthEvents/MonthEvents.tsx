import { EventType } from '../../../../../entities/Event/types';
import { ProductList } from '../../../../../widgets/ProductList';
import './MonthEvents.scss';

type Props = {
  month: string;
  events: EventType[];
};

export const MonthEvents: React.FC<Props> = ({ month, events }) => {
  return (
    <section className="MonthEvents">
      <h2 className="MonthEvents__title">{month}</h2>

      <ProductList events={events} />
    </section>
  );
};
