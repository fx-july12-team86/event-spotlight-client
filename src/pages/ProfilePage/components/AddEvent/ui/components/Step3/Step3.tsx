import { useAppSelector } from '../../../../../../../shared/hooks/reduxHooks';
import { DescriptionForm } from './components/DescriptionForm/DescriptionForm';
import './Step3.scss';

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Step3: React.FC<Props> = ({ setStep }) => {
  const { description } = useAppSelector((state) => state.event);

  return (
    <section className="Step3">
      <div className="Step3__item">
        <h2 className="Step3__number">3</h2>
      </div>

      <div className="Step3__item">
        <header className="Step3__header">
          <div className="Step3__header-box">
            <h2 className="Step3__header-title">Опис події</h2>

            <p className="Step3__header-subtitle">
              Опис повинен мати усі ключові деталі події, окрім тих, що були
              заповнені на кроці 2
            </p>
          </div>
        </header>

        <main className="Step3__main">
          <DescriptionForm />
        </main>

        <footer className="Step3__footer">
          <button
            className="Step3__footer-prev"
            onClick={() => setStep((step) => (step -= 1))}
          >
            Попередній крок
          </button>

          <button
            className="Step3__footer-btn"
            onClick={() => setStep((step) => (step += 1))}
            disabled={!description}
          >
            Наступний крок
          </button>
        </footer>
      </div>
    </section>
  );
};
