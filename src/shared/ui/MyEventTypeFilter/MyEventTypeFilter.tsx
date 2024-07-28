import './MyEventTypeFilter.scss';
import cn from 'classnames';

type Props = {
  filter: string;
  addFilter: () => void;
  isSelected: boolean;
};

export const MyEventTypeFilter: React.FC<Props> = ({
  filter,
  isSelected,
  addFilter,
}) => {
  return (
    <li
      className={cn('MyEventTypeFilter', {
        'MyEventTypeFilter--selected': isSelected,
      })}
      onClick={addFilter}
    >
      <p className="MyEventTypeFilter__name">{filter}</p>
    </li>
  );
};
