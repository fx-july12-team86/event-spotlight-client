import './MySelectedFilter.scss';

type Props = {
  filter: string;
  addFilter: () => void;
};

export const MySelectedFilter: React.FC<Props> = ({ filter, addFilter }) => {
  return (
    <li className="MySelectedFilter">
      <p className="MySelectedFilter__name">{filter}</p>

      <img
        src="icons/close.svg"
        alt="remove filter"
        height={24}
        width={24}
        className="MySelectedFilter__remove"
        onClick={addFilter}
      />
    </li>
  );
};
