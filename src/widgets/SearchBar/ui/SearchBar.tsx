import { MySearch } from '../../../shared/ui';
import { MyButtonGreen } from '../../../shared/ui/MyButtonGreen/MyButtonGreen';
import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="SearchBar__left">
        <MySearch height="64px" />

        <button className="SearchBar__filters">Фільтри</button>

        <button className="SearchBar__location">Київ</button>
      </div>

      <div className="SearchBar__right">
        <MyButtonGreen>Пошук</MyButtonGreen>
      </div>
    </div>
  );
};
