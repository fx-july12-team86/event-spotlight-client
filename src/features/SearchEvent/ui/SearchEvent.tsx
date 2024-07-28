import { MySearch } from '../../../shared/ui';
import { MyButtonLarge } from '../../../shared/ui/MyButtonLarge/MyButtonLarge';
import './SearchEvent.scss';

type Props = {
  setShowFilters: (v: boolean) => void;
  showFilters: boolean;
};

export const SearchEvent: React.FC<Props> = ({
  setShowFilters,
  showFilters,
}) => {
  return (
    <div className="SearchEvent">
      <MySearch height="64px" />

      <button
        className="SearchEvent__filters"
        onClick={() => setShowFilters(!showFilters)}
      >
        Фільтри
      </button>

      <button className="SearchEvent__location">Київ</button>

      <MyButtonLarge className="SearchEvent__btn">Пошук</MyButtonLarge>
    </div>
  );
};
