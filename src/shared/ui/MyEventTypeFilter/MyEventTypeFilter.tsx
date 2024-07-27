import './MyEventTypeFilter.scss';

type Props = {
  filter: string;
};

export const MyEventTypeFilter: React.FC<Props> = ({ filter }) => {
  return (
    <li className="MyEventTypeFilter">
      <p className="MyEventTypeFilter__name">{filter}</p>
    </li>
  );
};
