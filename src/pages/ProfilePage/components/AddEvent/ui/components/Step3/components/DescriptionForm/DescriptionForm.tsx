import cn from 'classnames';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../../shared/hooks/reduxHooks';
import './DescriptionForm.scss';
import { eventActions } from '../../../../../../../../../entities/Event';

const DESCRIPTION_MAX_LENGTH = 10;

export const DescriptionForm = () => {
  const dispatch = useAppDispatch();
  const { description } = useAppSelector((state) => state.event);

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value.length <= DESCRIPTION_MAX_LENGTH) {
      dispatch(
        eventActions.updateProperty({
          field: 'description',
          value: value,
        })
      );
    }
  }

  return (
    <form className="DescriptionForm">
      <div className="DescriptionForm__input">
        <p className="DescriptionForm__input-lable">Детальний опис події</p>

        <div
          className={cn('DescriptionForm__input-box', {
            'DescriptionForm__input-box--error':
              description.length === DESCRIPTION_MAX_LENGTH,
          })}
        >
          <textarea
            className="DescriptionForm__input-field"
            onChange={handleOnChange}
            placeholder="Майстер-клас з миловаріння для дорослих та дітей"
            value={description}
          />

          <div className="DescriptionForm__input-counter">
            {`${description.length}/${DESCRIPTION_MAX_LENGTH}`}
          </div>
        </div>
      </div>

      <p className="DescriptionForm__error">
        {description.length === DESCRIPTION_MAX_LENGTH &&
          'Максімальна кількісти символів 1000'}
      </p>
    </form>
  );
};
