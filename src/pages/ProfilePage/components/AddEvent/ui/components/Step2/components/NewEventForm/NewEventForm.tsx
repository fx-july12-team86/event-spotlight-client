import cn from 'classnames';

import './NewEventForm.scss';
import { MyCheckbox, MySelect } from '../../../../../../../../../shared/ui';
import { EVENT_TYPES } from '../../../../../../../../../widgets/SearchBar/consts';

export const NewEventForm = () => {
  return (
    <form onSubmit={() => {}} className="NewEventForm">
      <div className="NewEventForm__input">
        <p className="NewEventForm__input-label">Назва події</p>

        <input
          className={cn('NewEventForm__input-field', {
            'NewEventForm__input-field--invalid': false,
          })}
          placeholder="Майстер-клас з миловаріння"
        />
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input NewEventForm__input--select">
          <MySelect title="Обери категорію" list={EVENT_TYPES} />
        </div>

        <div className="NewEventForm__input NewEventForm__input--select">
          <MySelect
            title="Обери підкатегорію (за бажанням)"
            list={EVENT_TYPES}
          />
        </div>
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input">
          <p className="NewEventForm__input-label">Адреса проведення</p>

          <input type="text" className="NewEventForm__input-field" />
        </div>

        <div className="NewEventForm__input">
          <MyCheckbox title="Онлайн" />
        </div>
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input">
          <p className="NewEventForm__input-label">Ціна квитка</p>

          <input type="text" className="NewEventForm__input-field" />
        </div>

        <div className="NewEventForm__input">
          <MyCheckbox title="Безкоштовно" />
        </div>
      </div>

      <div className="NewEventForm__line">
        <div className="NewEventForm__input">
          <p className="NewEventForm__input-label">Дата проведення</p>

          <input type="text" className="NewEventForm__input-field" />
        </div>

        <div className="NewEventForm__input">
          <p className="NewEventForm__input-label">Час проведення</p>

          <input type="text" className="NewEventForm__input-field" />
        </div>
      </div>
    </form>
  );
};
