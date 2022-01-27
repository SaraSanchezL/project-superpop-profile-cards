const CreatedCard = (props) => {
  return (
    <>
      <div className="share_button__item--line"></div>
      <h3 className="share_creation__title">La tarjeta ha sido creada:</h3>
      <a
        href={props.URLCard}
        target="_blank"
        rel="noreferrer"
        className="share_creation__link href js-shareCreationLink"
        src="https://awesome-profile-card.com?id=A456DF0001"
      >
        https://awesome-profile-card.com?id=A456DF0001
      </a>
    </>
  );
};

export default CreatedCard;