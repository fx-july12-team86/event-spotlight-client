import cn from 'classnames';

import './NewEventForm.scss';
import { MyCheckbox, MySelect } from '../../../../../../../../../shared/ui';
import { EVENT_TYPES } from '../../../../../../../../../widgets/SearchBar/consts';
import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../../shared/hooks/reduxHooks';
import { eventActions } from '../../../../../../../../../entities/Event';

const TITLE_MAX_LENGTH = 55;
type FormErrors = {
  title?: string;
};

export const NewEventForm = () => {
  const dispatch = useAppDispatch();
  const { title, category, subCategory } = useAppSelector(
    (state) => state.event
  );

  const [errors, setErrors] = useState<FormErrors>({});

  function handleSetTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > TITLE_MAX_LENGTH) {
      setErrors({ ...errors, title: 'Максимальна довжина 55 символів' });

      return;
    }

    setErrors({ ...errors, title: '' });
    dispatch(eventActions.setTitle(value));
  }

  function setCategory(value: string) {
    dispatch(eventActions.setCategory(value));
  }

  function setSubCategory(value: string) {
    dispatch(eventActions.setSubCategory(value));
  }

  return (
    <form onSubmit={() => {}} className="NewEventForm">
      <div className="NewEventForm__input">
        <p className="NewEventForm__input-label">Назва події</p>

        <input
          className={cn('NewEventForm__input-field', {
            'NewEventForm__input-field--invalid': errors.title,
          })}
          placeholder="Майстер-клас з миловаріння"
          onChange={handleSetTitle}
          value={title}
        />

        <p
          className={cn('NewEventForm__input-counter', {
            'NewEventForm__input-counter--invalid': errors.title,
          })}
        >{`${title.length}/${TITLE_MAX_LENGTH}`}</p>

        <p className="NewEventForm__input-field--error">{errors.title}</p>
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input NewEventForm__input--select">
          <MySelect list={EVENT_TYPES} setter={setCategory} value={category} />
        </div>

        <div className="NewEventForm__input NewEventForm__input--select">
          <MySelect
            list={EVENT_TYPES}
            setter={setSubCategory}
            value={subCategory}
          />
        </div>
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input NewEventForm__input--location">
          <p className="NewEventForm__input-label">Адреса проведення</p>

          <input
            type="text"
            placeholder="вул. Добровольска 34а, Київ"
            className="NewEventForm__input-field NewEventForm__input-field--icon"
            onChange={(e) => dispatch(eventActions.setAddress(e.target.value))}
          />
        </div>

        <div className="NewEventForm__input">
          <MyCheckbox
            title="Онлайн"
            setter={(v) => dispatch(eventActions.setIsOnline(v))}
          />
        </div>
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input NewEventForm__input--money">
          <p className="NewEventForm__input-label">Ціна квитка</p>

          <input
            type="number"
            placeholder="360"
            className="NewEventForm__input-field NewEventForm__input-field--icon"
            onChange={(e) => dispatch(eventActions.setPrice(e.target.value))}
          />
        </div>

        <div className="NewEventForm__input">
          <MyCheckbox
            title="Безкоштовно"
            setter={(v) => dispatch(eventActions.setIsFree(v))}
          />
        </div>
      </div>

      <div className="NewEventForm__line">
        <label
          htmlFor="date"
          className="NewEventForm__input NewEventForm__input--calendar"
        >
          <p className="NewEventForm__input-label">Дата проведення</p>

          <input
            type="date"
            id="date"
            placeholder="22/22"
            className="NewEventForm__input-field NewEventForm__input-field--icon"
            onChange={(e) => dispatch(eventActions.setDate(e.target.value))}
          />
        </label>

        <div className="NewEventForm__input NewEventForm__input--time">
          <p className="NewEventForm__input-label">Час проведення</p>

          <input
            type="time"
            className="NewEventForm__input-field NewEventForm__input-field--icon"
            onChange={(e) => dispatch(eventActions.setTime(e.target.value))}
          />
        </div>
      </div>
    </form>
  );
};
