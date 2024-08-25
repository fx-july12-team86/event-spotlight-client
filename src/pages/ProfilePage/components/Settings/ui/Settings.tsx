import { Link } from 'react-router-dom';
import { ChangeProfile } from '../../../../../features/ChangeProfile';
import './Settings.scss';
import { ChangeProfileForm } from '../../../../../features/ChangeProfileForm/ChangeProfileForm';
import { ChangePasswordForm } from '../../../../../features/ChangePasswordForm/ChangePasswordForm';

export const Settings: React.FC = () => {
  return (
    <div className="Settings">
      <nav className="Settings__breadcrumbs">
        <Link to="/" className="Settings__breadcrumbs-item">
          Мій профіль
        </Link>

        <button className="Settings__breadcrumbs-item">
          Налаштування профілю
        </button>
      </nav>

      <h1 className="Settings__title">Мій профіль</h1>

      <div className="Settings__form-box">
        <ChangeProfile title="Iнформація">
          <ChangeProfileForm />
        </ChangeProfile>

        <ChangeProfile title="Пароль">
          <ChangePasswordForm />
        </ChangeProfile>
      </div>
    </div>
  );
};
