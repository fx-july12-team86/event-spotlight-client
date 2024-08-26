import './PhotoList.scss';

export const PhotoList = () => {
  return (
    <div className="PhotoList">
      {[1, 2, 3, 4].map((img) => (
        <img
          key={img}
          className={`PhotoList__img PhotoList__img--${img}`}
          src={`organizators/${img}.png`}
          alt="organizators"
          height={230}
          width={230}
        />
      ))}
    </div>
  );
};
