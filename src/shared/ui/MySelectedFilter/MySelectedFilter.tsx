import './MySelectedFilter.scss';

type Props = {
  filter: string;
};

export const MySelectedFilter: React.FC<Props> = ({ filter }) => {
  return (
    <li className="MySelectedFilter">
      <p className="MySelectedFilter__name">{filter}</p>

      <img
        src="icons/close.svg"
        alt="remove filter"
        height={24}
        width={24}
        className="MySelectedFilter__remove"
      />
    </li>
  );
};
