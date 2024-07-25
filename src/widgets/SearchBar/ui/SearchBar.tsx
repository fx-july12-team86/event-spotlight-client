import { MySearch } from '../../../shared/ui';
import { MyButtonLarge } from '../../../shared/ui/MyButtonLarge/MyButtonLarge';
import { FiltersBox } from './components/FiltersBox/FiltersBox';
import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="SearchBar__top">
        <div className="SearchBar__left">
          <MySearch height="64px" />

          <button className="SearchBar__filters">Фільтри</button>

          <button className="SearchBar__location">Київ</button>
        </div>

        <div className="SearchBar__right">
          <MyButtonLarge className="SearchBar__btn">Пошук</MyButtonLarge>
        </div>
      </div>

      <FiltersBox />
    </div>
  );
};
