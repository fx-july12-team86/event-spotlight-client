import { useAppSelector } from '../../../../../../../shared/hooks/reduxHooks';
import { NewEventForm } from './components/NewEventForm/NewEventForm';
import './Step2.scss';

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Step2: React.FC<Props> = ({ setStep }) => {
  const { title, category, subCategory, address, price, date, time } =
    useAppSelector((state) => state.event);

  const isFormValid = Boolean(
    title && category && subCategory && address && date && time && price
  );

  return (
    <section className="Step2">
      <div className="Step2__item">
        <h2 className="Step2__number">2</h2>
      </div>

      <div className="Step2__item">
        <header className="Step2__header">
          <div className="Step2__header-box">
            <h2 className="Step2__header-title">інформація про подію</h2>

            <p className="Step2__header-subtitle">
              Усі поля обов’язкові до заповнення!
            </p>
          </div>
        </header>

        <main className="Step2__main">
          <NewEventForm />
        </main>

        <footer className="Step2__footer">
          <button
            className="Step2__footer-prev"
            onClick={() => setStep((step) => (step -= 1))}
          >
            Попередній крок
          </button>

          <button
            className="Step2__footer-btn"
            onClick={() => setStep((step) => (step += 1))}
            disabled={!isFormValid}
          >
            Наступний крок
          </button>
        </footer>
      </div>
    </section>
  );
};
