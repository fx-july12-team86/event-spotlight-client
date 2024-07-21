import { MyLogo } from '../../../shared/ui';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__content container">
        <MyLogo theme="dark" />

        <main className="Footer__main">
          <div className="Footer__main-left">
            <ul className="Footer__list">
              <li className="Footer__list-item">Особистий кабінет</li>

              <li className="Footer__list-item">Усі події</li>

              <li className="Footer__list-item">Додати подію</li>
            </ul>

            <ul className="Footer__list">
              <li className="Footer__list-item">Про нас</li>

              <li className="Footer__list-item">Зв’язатись з нами</li>

              <li className="Footer__list-item">Контакти</li>
            </ul>
          </div>

          <ul className="Footer__list">
            <li className="Footer__list-item">Політика конфеденційності</li>

            <li className="Footer__list-item">Для організаторів</li>
          </ul>
        </main>

        <hr className="Footer__hr" />

        <div className="Footer__rights">
          <p className="Footer__copy">© 2024 EventSpotlight</p>

          <p className="Footer__copy">Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};
