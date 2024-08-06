import './ChangeProfile.scss';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const ChangeProfile: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="ChangeProfile">
      <div className="ChangeProfile__item">
        <div className="ChangeProfile__title">
          <img src="icons/profile_inf.svg" alt="profile icon" />

          <h1 className="ChangeProfile__title-item">{title}</h1>
        </div>
      </div>

      <div className="ChangeProfile__item">{children}</div>
    </div>
  );
};
