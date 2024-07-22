import './HeaderNavList.scss';

export const HeaderNavList = () => {
  return (
    <nav className="HeaderNavList">
      <div className="HeaderNavList__item">Концерти</div>

      <div className="HeaderNavList__item">Майстер-класи</div>

      <div className="HeaderNavList__item">Фестивалі</div>

      <div className="HeaderNavList__item">Виставки</div>

      <div className="HeaderNavList__item">Для дітей</div>
    </nav>
  );
};
