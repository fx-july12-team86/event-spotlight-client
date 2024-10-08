import { useState } from 'react';
import './Step1.scss';
import { useGetImageURL } from './hooks/useGetImageURL';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../shared/hooks/reduxHooks';
import { eventActions } from '../../../../../../../entities/Event';

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Step1: React.FC<Props> = ({ setStep }) => {
  const { eventImages } = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();

  const [urls, setUrls] = useState<string[]>([]);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const id = +(e.target.dataset.id || 0);
    const fileList = e.target.files;

    if (fileList) {
      dispatch(eventActions.setImage({ id, image: fileList[0] }));
    }
  }

  function removeImage(i: number) {
    dispatch(eventActions.removeImage(i));

    setUrls((prev) => {
      const newUrls = [...prev];
      newUrls[i] = '';
      return newUrls;
    });
  }

  useGetImageURL(eventImages, setUrls);

  return (
    <section className="Step1">
      <div className="Step1__item">
        <h2 className="Step1__number">1</h2>
      </div>

      <div className="Step1__item">
        <header className="Step1__header">
          <div className="Step1__header-box">
            <h2 className="Step1__header-title">зображення події</h2>

            <p className="Step1__header-subtitle">
              Перше зображення буде обкладинкою
            </p>
          </div>
        </header>

        <main className="Step1__main">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="Step1__img"
              style={{
                backgroundImage: eventImages[item] ? `url(${urls[item]})` : '',
              }}
            >
              <img
                src="icons/close.svg"
                alt="видалити малюнок"
                className="Step1__img-remove"
                onClick={() => removeImage(item)}
              />

              <input
                type="file"
                id={`img-${item}`}
                data-id={item}
                className="Step1__img-input"
                onChange={handleOnChange}
              />

              {!urls[item] && (
                <label htmlFor={`img-${item}`} className="Step1__img-btn">
                  <img src="add_event/img-btn.svg" />
                </label>
              )}
            </div>
          ))}
        </main>

        <footer className="Step1__footer">
          <button
            className="Step1__footer-btn"
            onClick={() => setStep((step) => (step += 1))}
            disabled={eventImages.length < 3}
          >
            Наступний крок
          </button>
        </footer>
      </div>
    </section>
  );
};
