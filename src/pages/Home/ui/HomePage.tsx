import { SearchBar } from '../../../widgets/SearchBar';
import { Slider } from '../../../widgets/Slider';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage__slider">
        <Slider />
      </div>

      <h1 className="HomePage__title">
        ЗНАЙДИ <span>ПОДІЮ</span> ДЛЯ СЕБЕ
      </h1>

      <SearchBar />
    </div>
  );
};
