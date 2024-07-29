import { MySearch } from '../../../shared/ui';
import './SelectCity.scss';

const cities = ['Усі міста', 'Одеса', 'Дніпро', 'Онлайн', 'Київ'];

export const SelectCity = () => {
  return (
    <div className="SelectCity">
      <h2 className="SelectCity__title">ОБЕРИ МІСТО</h2>

      <MySearch />

      <ul className="SelectCity__list">
        {cities.map((city) => (
          <p className="SelectCity__list-item" key={city}>
            {city}
          </p>
        ))}
      </ul>
    </div>
  );
};
