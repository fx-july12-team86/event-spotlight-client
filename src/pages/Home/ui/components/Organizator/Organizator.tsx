import { MyButtonLarge } from 'src/shared/ui/MyButtonLarge/MyButtonLarge';
import { PhotoList } from '../PhotoList/PhotoList';
import './Organizator.scss';

export const Organizator = () => {
  return (
    <div className="Organizator">
      <div className="Organizator__box">
        <h2 className="Organizator__title">ти організатор ?</h2>

        <div className="Organizator__photolist--tab">
          <PhotoList />
        </div>

        <p className="Organizator__subtitle">
          Додай свою подію на наш сайт та залучи більше клієнтів на свою подію
        </p>

        <MyButtonLarge className="Organizator__btn">Додати подію</MyButtonLarge>
      </div>

      <div className="Organizator__photolist">
        <PhotoList />
      </div>
    </div>
  );
};
