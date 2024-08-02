import './MyCheckbox.scss';

type Props = {
  title: string;
  setter: (v: boolean) => void;
};

export const MyCheckbox: React.FC<Props> = ({ title, setter }) => {
  return (
    <div className="MyCheckbox">
      <input
        type="checkbox"
        id="online"
        className="MyCheckbox__input"
        onChange={(e) => setter(e.target.checked)}
      />

      <label htmlFor="online" className="MyCheckbox__label">
        <p>{title}</p>
      </label>
    </div>
  );
};
