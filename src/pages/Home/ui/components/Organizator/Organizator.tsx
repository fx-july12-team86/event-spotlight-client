import { MyButtonLarge } from '../../../../../shared/ui/MyButtonLarge/MyButtonLarge';
import './Organizator.scss';

export const Organizator = () => {
  return (
    <div className="Organizator">
      <div className="Organizator__box">
        <h2 className="Organizator__title">ти організатор ?</h2>

        <p className="Organizator__subtitle">
          Додай свою подію на наш сайт та залучи більше клієнтів на свою подію
        </p>

        <MyButtonLarge className="Organizator__btn">Додати подію</MyButtonLarge>
      </div>

      <div className="Organizator__list">
        {[1, 2, 3, 4].map((img) => (
          <img
            key={img}
            className={`Organizator__img Organizator__img--${img}`}
            src={`organizators/${img}.png`}
            alt="organizators"
            height={230}
            width={230}
          />
        ))}
      </div>
    </div>
  );
};
