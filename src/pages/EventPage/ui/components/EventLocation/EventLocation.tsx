import './EventLocation.scss';

export const EventLocation = () => {
  return (
    <div className="EventLocation">
      <p className="EventLocation__address">Art studio “Lila”, Львів</p>

      <div className="EventLocation__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5486.269016891007!2d30.501598900106764!3d50.463469646401116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce69500bae39%3A0x429a45babddf76d8!2sArtstudio!5e0!3m2!1sen!2sua!4v1721738724001!5m2!1sen!2sua"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
