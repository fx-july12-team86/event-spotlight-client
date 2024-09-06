import cn from 'classnames';

import './Progress.scss';
import { useAppSelector } from '../../../../../../../shared/lib/hooks/reduxHooks';

const PROGRESS = [
  { id: 1, title: 'Зображення' },
  { id: 2, title: 'Інформація' },
  { id: 3, title: 'Опис події' },
  { id: 4, title: 'Контакти' },
];

type Props = {
  step: number;
  setStep: (v: number) => void;
};

export const Progress: React.FC<Props> = ({ step, setStep }) => {
  const {
    eventImages,
    title,
    category,
    subCategory,
    address,
    date,
    time,
    price,
  } = useAppSelector((state) => state.event);

  function isStepDisabled(id: number) {
    if (id === 2 && eventImages.length < 3) {
      return true;
    }

    if (
      id === 3 &&
      title === '' &&
      !category &&
      !subCategory &&
      address === '' &&
      date === '' &&
      time === '' &&
      price === ''
    ) {
      return true;
    }

    return false;
  }

  function nextStep(id: number) {
    switch (id) {
      case 1:
        setStep(id);
        break;

      case 2: {
        if (eventImages.length < 3) {
          return;
        } else {
          setStep(id);
        }
        break;
      }

      case 3: {
        if (
          title &&
          category &&
          subCategory &&
          address &&
          date &&
          time &&
          price
        ) {
          setStep(id);
        } else {
          return;
        }

        break;
      }
    }
  }

  return (
    <ul className="Progress">
      {PROGRESS.map((el) => {
        const { id, title } = el;

        return (
          <li
            key={id}
            className={cn('Progress__item', {
              'Progress__item--current': step === id,
              'Progress__item--disabled': isStepDisabled(id),
            })}
            onClick={() => nextStep(id)}
          >
            <div
              className={cn('Progress__lable', {
                'Progress__lable--current': step === id,
              })}
            >
              {id}
            </div>

            <p className="Progress__step">{`крок ${id}`}</p>

            <p className="Progress__title">{title}</p>
          </li>
        );
      })}
    </ul>
  );
};
