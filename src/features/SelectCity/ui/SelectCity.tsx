import { useSearchParams } from 'react-router-dom';
import { MySearch } from '../../../shared/ui';
import './SelectCity.scss';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';
import { userActions } from '../../../entities/User';

const cities = [
  'Усі міста',
  'Одеса',
  'Дніпро',
  'Онлайн',
  'Київ',
  'Кам’янець Подільский',
];

type Props = {
  handleOnClose: () => void;
};

export const SelectCity: React.FC<Props> = ({ handleOnClose }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const dispatch = useAppDispatch();

  const filteredCity = cities.filter((c) =>
    c.toLowerCase().includes(query?.toLowerCase() || '')
  );

  function select(city: string) {
    dispatch(userActions.setUserLocation(city));
    handleOnClose();
  }

  return (
    <div className="SelectCity" onClick={(e) => e.stopPropagation()}>
      <h2 className="SelectCity__title">ОБЕРИ МІСТО</h2>

      <MySearch />

      <ul className="SelectCity__list">
        {filteredCity.map((city) => (
          <p
            className="SelectCity__list-item"
            key={city}
            onClick={() => select(city)}
          >
            {city}
          </p>
        ))}
      </ul>
    </div>
  );
};
