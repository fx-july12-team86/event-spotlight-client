import { useState } from 'react';
import { useAppSelector } from '../../../../../../../shared/hooks/reduxHooks';
import { ContactsForm } from './components/ContactForm/ContactsForm';
import './Step4.scss';
import { MyDialog } from '../../../../../../../shared/ui';

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Step4: React.FC<Props> = ({ setStep }) => {
  const { phone, email, instagram, telegram, facebook } = useAppSelector(
    (state) => state.event
  );

  const isFormValid = Boolean(
    phone || email || instagram || telegram || facebook
  );

  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className="Step4">
      <div className="Step4__item">
        <h2 className="Step4__number">4</h2>
      </div>

      <div className="Step4__item">
        <header className="Step4__header">
          <div className="Step4__header-box">
            <h2 className="Step4__header-title">
              контактна інформація організатора{' '}
            </h2>

            <p className="Step4__header-subtitle">
              Потрібно заповнити хоча б одне поле
            </p>
          </div>
        </header>

        <main className="Step4__main">
          <ContactsForm />
        </main>

        <footer className="Step4__footer">
          <button
            className="Step4__footer-prev"
            onClick={() => setStep((step) => (step -= 1))}
          >
            Попередній крок
          </button>

          <button
            className="Step4__footer-btn Step4__footer-btn--save"
            onClick={() => setShowDialog(true)}
            disabled={!isFormValid}
          >
            Зберегти
          </button>

          <button
            className="Step4__footer-btn"
            onClick={() => setShowDialog(true)}
            disabled={!isFormValid}
          >
            Зберегти та опублікувати
          </button>
        </footer>
      </div>

      {showDialog && (
        <MyDialog onClose={setShowDialog}>
          <div className="Step4__success">
            <h3 className="Step4__success--title">ВІТАЄМО</h3>

            <p className="Step4__success--text">
              Твоя подія збережена та буде опублікована на сайті після перевірки
              адміністрацією.
            </p>
          </div>
        </MyDialog>
      )}
    </section>
  );
};
