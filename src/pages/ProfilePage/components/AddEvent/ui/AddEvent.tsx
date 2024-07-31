import { Link } from 'react-router-dom';
import './AddEvent.scss';
import { Progress } from './components/Progress/Progress';
import { useState } from 'react';
import { Step1 } from './components/Step1/Step1';

export const AddEvent: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="AddEvent">
      <nav className="AddEvent__breadcrumbs">
        <Link to="/" className="AddEvent__breadcrumbs-item">
          Мій профіль
        </Link>

        <button className="AddEvent__breadcrumbs-item">Додати подію</button>
      </nav>

      <h1 className="AddEvent__title">Додати подію</h1>

      <div className="AddEvent__progress">
        <Progress step={step} setStep={setStep} />
      </div>

      <Step1 setStep={setStep} />
    </div>
  );
};
