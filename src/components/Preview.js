import PreviewBtnReset from "./PreviewBtnReset";
import PreviewIcons from "./PreviewIcons";
import Profile from "./Profile";

const Preview = (props) => {
  return (
    <>
      <section className="card-container">
        <div className="container">
          <PreviewBtnReset handleReset={props.handleReset} />
          <article className="card">
            <div className="card__title">
              <div
                className={`card__title--rectangle rectangle-js rectangle-${props.dataPalette}`}
              ></div>
              <div className="card__title--text">
                <h3
                  className={`name name-${props.dataPalette} js-nameInput fullname-js`}
                >
                  {props.dataName || "nombre y apellidos"}
                </h3>
                <h4 className="subtitle js-jobInput">
                  {props.dataJob || "Front-end Developer"}
                </h4>
              </div>
            </div>
            <Profile avatar={props.avatar}/>
            {/*<div className="card__photo profile__preview js__profile-preview"></div>*/}
            <ul className="card__list">
              <PreviewIcons
                link={`tel:${props.dataPhone}` || "/"}
                dataPalette={props.dataPalette}
                className={`fas fa-mobile-alt card__list--icon-1 cardicon-js icon-${props.dataPalette}`}
              />

              <PreviewIcons
                link={`mailto:${props.dataEmail || "mailto:email@email.com"}`}
                dataPalette={props.dataPalette}
                className={`far fa-envelope cardicon-js icon-${props.dataPalette}`}
              />

              <PreviewIcons
                link={`//${props.dataLinkedin}`}
                dataPalette={props.dataPalette}
                className={`fab fa-linkedin-in card__list--icon-1 cardicon-js icon-${props.dataPalette}`}
              />

              <PreviewIcons
                link={`https://github.com/${props.dataGithub}`}
                dataPalette={props.dataPalette}
                className={`fab fa-github-alt card__list--icon-1 cardicon-js icon-${props.dataPalette}`}
              />
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Preview;
