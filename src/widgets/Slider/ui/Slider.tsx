import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';

export const Slider = () => {
  return (
    <Carousel data-bs-theme="dark">
      {[1, 2, 3].map((slide) => (
        <Carousel.Item key={slide}>
          <div className="Slider__item">
            <img
              className="Slider__img"
              src="slider/halloween.webp"
              alt="First slide"
              height={548}
              width={648}
            />

            <div className="Slider__right">
              <div className="Slider__event">Майстер-клас</div>

              <h2 className="Slider__title">Halloween party для дорослих</h2>

              <ul className="Slider__oprions">
                <li className="Slider__oprions Slider__oprions--date">
                  24 липня 2024 19:30
                </li>

                <li className="Slider__oprions Slider__oprions--place">
                  Art studio “Lila”, Львів
                </li>

                <li className="Slider__oprions Slider__oprions--price">
                  350 ₴
                </li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
