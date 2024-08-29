import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';

export const Slider = () => {
  return (
    <Carousel data-bs-theme="dark" interval={null}>
      {['halloween', 'golf', 'concert', 'disco'].map((slide) => (
        <Carousel.Item key={slide}>
          <div className="Slider__item">
            <img
              className="Slider__img"
              src={`slider/${slide}.webp`}
              alt="First slide"
              height={548}
              width={648}
            />

            <div className="Slider__right">
              <div className="Slider__right-top">
                <div className="Slider__event">Майстер-клас</div>

                <h2 className="Slider__title">Halloween party для дорослих</h2>
              </div>

              <ul className="Slider__options">
                <li className="Slider__option Slider__option--date">
                  24 липня 2024 <span /> 19:30
                </li>

                <li className="Slider__option Slider__option--place">
                  Art studio “Lila”, Львів
                </li>

                <li className="Slider__option Slider__option--price">350 ₴</li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
