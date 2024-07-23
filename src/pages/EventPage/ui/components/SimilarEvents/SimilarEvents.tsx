import { EventType } from '../../../../../entities/Event/types';
import { MyButtonLarge } from '../../../../../shared/ui/MyButtonLarge/MyButtonLarge';
import { ProductList } from '../../../../../widgets/ProductList';
import './SimilarEvents.scss';

type Props = {
  eventsToр: EventType[];
};

export const SimilarEvents: React.FC<Props> = ({ eventsToр }) => {
  return (
    <section className="SimilarEvents">
      <h2 className="SimilarEvents__title--h2">подібні події</h2>

      <ProductList events={eventsToр} />

      <MyButtonLarge className="SimilarEvents__btn--purple">
        Більше подій
      </MyButtonLarge>
    </section>
  );
};
