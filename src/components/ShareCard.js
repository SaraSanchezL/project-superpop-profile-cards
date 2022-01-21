import imgShareTwitter from "../images/twitter.svg"
import imgShareLinkedin from "../images/linkedin.svg";
import imgShareFacebook from "../images/facebook.svg";
import ShareSocialNetwork from "./ShareSocialNetwork";
import BtnMakeCard from "./BtnMakeCard";
import CreatedCard from "./CreatedCard";

const ShareCard = (props) => {
  return (
    <>

<fieldset className="legend">
            <div
              className="js-legend legend__container"
              id="legend-share"
              onClick={props.handleCollapsable}
            >
              <div className="legend__container--icon">
                <i
                  className="legend__icon far fa-address-card icon"
                  alt="icono de compartir"
                  title="Comparte tu tarjeta"
                ></i>
                <legend className="legend__title">Comparte</legend>
              </div>
              <i
                className={`legend__arrow fas ${
                  props.collapsableShare ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                alt="arrow"
                title="Click to open"
              ></i>
            </div>
            <div
              className={`sharecontainer ${
                props.collapsableShare ? "collapsed" : ""
              }`}
            >

      <BtnMakeCard />

      <section className="share_creation ">
        <CreatedCard URLCard={"./#"} />
        <ShareSocialNetwork
          className={"share_creation__twitter js-share-RRSS"}
          href={"https://www.twitter.com"}
          img={imgShareTwitter}
          alt={"Compartir en Twitter"}
          text={"Compartir en Twitter"}
        />
        <ShareSocialNetwork
          className={"share_creation__facebook js-share-RRSS"}
          href={"./#"}
          img={imgShareFacebook}
          alt={"Compartir en Facebook"}
          text={"Compartir en Facebook"}
        />
        <ShareSocialNetwork
          className={"share_creation__linkedin js-share-RRSS"}
          href={"./#"}
          img={imgShareLinkedin}
          alt={"Compartir en Linkedin"}
          text={"Compartir en Linkedin"}
        />
      </section>
           
      </div>
          </fieldset>

    </>
  );
};

export default ShareCard;
