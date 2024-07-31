import './MyCheckbox.scss';

type Props = {
  title: string;
};

export const MyCheckbox: React.FC<Props> = ({ title }) => {
  return (
    <div className="MyCheckbox">
      <input type="checkbox" id="online" className="MyCheckbox__input" />

      <label htmlFor="online" className="MyCheckbox__label">
        <p>{title}</p>
      </label>
    </div>
  );
};
