import imgShareTwitter from "../images/twitter.svg";
import imgShareLinkedin from "../images/linkedin.svg";
import imgShareFacebook from "../images/facebook.svg";
import ShareSocialNetwork from "./ShareSocialNetwork";
import BtnMakeCard from "./BtnMakeCard";
import CreatedCard from "./CreatedCard";

const ShareCard = () => {
  return (
    <>
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
    </>
  );
};

export default ShareCard;
