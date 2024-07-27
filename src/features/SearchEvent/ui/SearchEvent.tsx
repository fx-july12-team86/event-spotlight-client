import { MySearch } from '../../../shared/ui';
import { MyButtonLarge } from '../../../shared/ui/MyButtonLarge/MyButtonLarge';
import './SearchEvent.scss';

export const SearchEvent = () => {
  return (
    <div className="SearchEvent">
      <MySearch height="64px" />

      <button className="SearchEvent__filters">Фільтри</button>

      <button className="SearchEvent__location">Київ</button>

      <MyButtonLarge className="SearchEvent__btn">Пошук</MyButtonLarge>
    </div>
  );
};
