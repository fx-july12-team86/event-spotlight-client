import './MyLogo.scss';

type Props = {
  theme?: 'light' | 'dark';
};

export const MyLogo: React.FC<Props> = ({ theme = 'light' }) => {
  console.log(theme);
  return (
    <div className="Logo">
      <img
        className="Logo__img"
        src=""
        alt="site logo"
        width={32}
        height={32}
      />

      <p className="Logo__sitename">EventSpotlight</p>
    </div>
  );
};
