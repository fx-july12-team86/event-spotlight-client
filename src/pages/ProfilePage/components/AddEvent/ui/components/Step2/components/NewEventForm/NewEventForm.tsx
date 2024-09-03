import cn from 'classnames';
import { useEffect, useState } from 'react';

import './NewEventForm.scss';
import { MyCheckbox, MySelect } from '../../../../../../../../../shared/ui';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../../shared/hooks/reduxHooks';
import { eventActions } from '../../../../../../../../../entities/Event';
import { CategoryType } from '../../../../../../../../../entities/Category/types';
import { categoryApi } from '../../../../../../../../../entities/Category';

const TITLE_MAX_LENGTH = 55;
type FormErrors = {
  title?: string;
};

export const NewEventForm = () => {
  const dispatch = useAppDispatch();
  const {
    title,
    category,
    subCategory,
    address,
    isOnline,
    isFree,
    price,
    date,
    time,
  } = useAppSelector((state) => state.event);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    categoryApi
      .getAll()
      .then(setCategories)
      .catch((err) => console.log(err));
  }, []);

  const [errors, setErrors] = useState<FormErrors>({});

  function handleSetTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > TITLE_MAX_LENGTH) {
      setErrors({ ...errors, title: 'Максимальна довжина 55 символів' });

      return;
    }

    setErrors({ ...errors, title: '' });
    dispatch(eventActions.updateProperty({ field: 'title', value }));
  }

  function setCategory(value: CategoryType) {
    dispatch(eventActions.updateProperty({ field: 'category', value }));
  }

  function setSubCategory(value: CategoryType) {
    dispatch(eventActions.updateProperty({ field: 'subCategory', value }));
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
          <MySelect
            list={categories}
            setter={setCategory}
            value={category}
            placeholder="Обери категорію"
          />
        </div>

        <div className="NewEventForm__input NewEventForm__input--select">
          <MySelect
            list={categories}
            setter={setSubCategory}
            value={subCategory}
            placeholder="Обери підкатегорію (за бажанням)"
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
            onChange={(e) =>
              dispatch(
                eventActions.updateProperty({
                  field: 'address',
                  value: e.target.value,
                })
              )
            }
            value={address}
          />
        </div>

        <div className="NewEventForm__input">
          <MyCheckbox
            title="Онлайн"
            setter={(v) =>
              dispatch(
                eventActions.updateProperty({ field: 'isOnline', value: v })
              )
            }
            value={isOnline}
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
            onChange={(e) =>
              dispatch(
                eventActions.updateProperty({
                  field: 'price',
                  value: e.target.value,
                })
              )
            }
            value={price}
          />
        </div>

        <div className="NewEventForm__input">
          <MyCheckbox
            title="Безкоштовно"
            setter={(v) =>
              dispatch(
                eventActions.updateProperty({ field: 'isFree', value: v })
              )
            }
            value={isFree}
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
            className="NewEventForm__input-field NewEventForm__input-field--icon"
            onChange={(e) =>
              dispatch(
                eventActions.updateProperty({
                  field: 'date',
                  value: e.target.value,
                })
              )
            }
            value={date}
          />
        </label>

        <div className="NewEventForm__input NewEventForm__input--time">
          <p className="NewEventForm__input-label">Час проведення</p>

          <input
            type="time"
            className="NewEventForm__input-field NewEventForm__input-field--icon"
            onChange={(e) =>
              dispatch(
                eventActions.updateProperty({
                  field: 'time',
                  value: e.target.value,
                })
              )
            }
            value={time}
          />
        </div>
      </div>
    </form>
  );
};
