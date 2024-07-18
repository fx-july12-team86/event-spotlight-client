import './EventSceleton.scss';

export const EventSceleton = () => {
  return (
    <div className="EventSceleton">
      <div className="EventSceleton__img-box--sceleton" />

      <div className="EventSceleton__descr">
        <div className="EventSceleton__category-box">
          <p className="EventSceleton__category--sceleton"></p>

          <img
            src="icons/empty_heart.svg"
            className="EventSceleton__favorite"
            alt="fevorite"
            height={44}
            width={44}
          />
        </div>

        <div className="EventSceleton__title-box">
          <div className="EventSceleton__sceleton-title">
            <div className="EventSceleton__sceleton" />

            <div className="EventSceleton__sceleton" />
          </div>

          <ul className="EventSceleton__options">
            <li className="EventSceleton__option EventSceleton__option--date">
              <p></p>

              <p></p>
            </li>

            <li className="EventSceleton__option EventSceleton__option--place"></li>

            <li className="EventSceleton__option EventSceleton__option--price"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
