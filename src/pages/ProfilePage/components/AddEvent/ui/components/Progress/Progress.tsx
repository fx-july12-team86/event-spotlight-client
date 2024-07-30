import cn from 'classnames';

import './Progress.scss';

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
  return (
    <ul className="Progress">
      {PROGRESS.map((el) => {
        const { id, title } = el;

        return (
          <li
            key={id}
            className={cn('Progress__item', {
              'Progress__item--current': step === id,
            })}
            onClick={() => setStep(id)}
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
