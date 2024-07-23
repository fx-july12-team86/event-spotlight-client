import { MyButtonLarge } from '../../../../../shared/ui/MyButtonLarge/MyButtonLarge';
import './FirstScreen.scss';

export const FirstScreen = () => {
  return (
    <section className="FirstScreen">
      <img
        src="slider/product_1.webp"
        alt="event"
        className="FirstScreen__img"
        height={510}
        width={510}
      />

      <div className="FirstScreen__detail">
        <div className="div">
          <div className="FirstScreen__right-top">
            <div className="FirstScreen__favorite">
              <div className="FirstScreen__event">Майстер-клас</div>

              <img
                src="icons/empty_heart_white.svg"
                alt="favorite icon"
                className="FirstScreen__favorite-icon"
                height={30}
                width={30}
              />
            </div>

            <h1 className="FirstScreen__title">Майстер-клас з миловаріння</h1>
          </div>

          <ul className="FirstScreen__options">
            <li className="FirstScreen__option FirstScreen__option--date">
              24 липня 2024 <span /> 19:30
            </li>

            <li className="FirstScreen__option FirstScreen__option--place">
              Art studio “Lila”, Львів
            </li>

            <li className="FirstScreen__option FirstScreen__option--price">
              350 ₴
            </li>
          </ul>
        </div>

        <div className="FirstScreen__bottom">
          <MyButtonLarge className="FirstScreen__btn">
            Зв’язатись з орагнізатором
          </MyButtonLarge>

          <p className="FirstScreen__share">Поділитись з друзями</p>
        </div>
      </div>
    </section>
  );
};
