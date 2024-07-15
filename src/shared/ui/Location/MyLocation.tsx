import './MyLocation.scss';

type Props = {
  city: string;
};

export const MyLocation: React.FC<Props> = ({ city = '' }) => {
  return <p className="MyLocation">{city}</p>;
};
