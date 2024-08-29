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
      <div className="SearchEvent__wrapper">
        <MySearch height="56px" />

        <button
          className="SearchEvent__filters"
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          <p>Фільтри</p>
        </button>

        <button className="SearchEvent__location">Київ</button>
      </div>

      <MyButtonLarge className="SearchEvent__btn">Пошук</MyButtonLarge>
    </div>
  );
};
