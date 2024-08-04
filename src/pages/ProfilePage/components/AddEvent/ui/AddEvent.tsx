import { Link } from 'react-router-dom';
import './AddEvent.scss';
import { Progress } from './components/Progress/Progress';
import { useState } from 'react';
import { Step1 } from './components/Step1/Step1';
import { Step2 } from './components/Step2/Step2';
import { Step3 } from './components/Step3/Step3';
import { Step4 } from './components/Step4/Step4';

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

      {step === 1 && <Step1 setStep={setStep} />}

      {step === 2 && <Step2 setStep={setStep} />}

      {step === 3 && <Step3 setStep={setStep} />}

      {step === 4 && <Step4 setStep={setStep} />}
    </div>
  );
};
