import './ChangeProfile.scss';
import { ChangeProfileForm } from './components/ChangeProfileForm/ChangeProfileForm';

export const ChangeProfile = () => {
  return (
    <div className="ChangeProfile">
      <div className="ChangeProfile__item">
        <div className="ChangeProfile__title">
          <img src="icons/profile_inf.svg" alt="profile icon" />

          <h1 className="ChangeProfile__title-item">Інформація</h1>
        </div>
      </div>

      <div className="ChangeProfile__item">
        <ChangeProfileForm />
      </div>
    </div>
  );
};
