import "../stylesheets/App.scss";
import ls from "../services/localStorage";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

//Imagenes
import superPopLogo from "../images/superpop-logo.png";
import FormFill from "./FormFill";
import Preview from "./Preview";
import Header from "./Header";
import FormDesign from "./FormDesign";
import ShareCard from "./ShareCard";
import Landing from "./Landing";

function App() {
  const [data, setData] = useState(
    ls.get("localData", {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "Photo",
    })
  );

  const [dataApi, setDataApi] = useState({});

  useEffect(() => {
    ls.set("localData", data);
  }, [data]);

  const handleInput = (name, value) => {
    const inputChange = name;
    setData({
      ...data,
      [inputChange]: value,
    });
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setDataApi({});
  };

  const [collapsablePalette, setcollapsablePalette] = useState(false);
  const [collapsableFill, setcollapsableFill] = useState(true);
  const [collapsableShare, setcollapsableShare] = useState(true);

  const handleCollapsable = (ev) => {
    const oneID = ev.currentTarget.id;
    if (oneID === "legend-design") {
      setcollapsablePalette(!collapsablePalette);
    } else if (oneID === "legend-fill") {
      setcollapsableFill(!collapsableFill);
    } else if (oneID === "legend-share") {
      setcollapsableShare(!collapsableShare);
    }
  };

  const handleApi = (event) => {
    event.preventDefault();
    callToApi(data).then((response) => {
      setDataApi(response);
    });
  };

  return (
    <div className="App">

  
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/designcards" exact>
        <Header />

        <main className="designmain">
          <Preview
            handleReset={handleReset}
            dataPalette={data.palette}
            dataName={data.name}
            dataJob={data.job}
            dataEmail={data.email}
            dataPhone={data.phone}
            dataLinkedin={data.linkedin}
            dataGithub={data.github}
          />

          <form className="form-section" action="" id="form">
            <fieldset className="legend">
              <div
                className="js-legend legend__container"
                id="legend-design"
                onClick={handleCollapsable}
              >
                <div className="legend__container--icon">
                  <i
                    className="legend__icon far fa-object-ungroup icon"
                    alt="icono de diseño"
                    title="diseña tu tarjeta"
                  ></i>
                  <legend className="legend__title">diseña</legend>
                </div>
                <i
                  title="Pulsa para desplegar"
                  className={`legend__arrow fas ${
                    collapsablePalette ? "fa-chevron-down" : "fa-chevron-up"
                  }`}
                  alt="arrow"
                ></i>
              </div>
              <div
                className={`design-container js-container ${
                  collapsablePalette ? "collapsed" : ""
                }`}
              >
                <FormDesign handleInput={handleInput} data={data} />
              </div>
            </fieldset>

            <fieldset className="legend">
              <div
                className="js-legend legend__container"
                id="legend-fill"
                onClick={handleCollapsable}
              >
                <div className="legend__container--icon">
                  <i
                    className="legend__icon far fa-keyboard icon"
                    alt="icono de relleno"
                    title="Rellena tu tarjeta"
                  ></i>
                  <legend className="legend__title">Rellena</legend>
                </div>
                <i
                  title="Pulsa para desplegar"
                  className={`legend__arrow fas ${
                    collapsableFill ? "fa-chevron-down" : "fa-chevron-up"
                  }`}
                  alt="arrow"
                ></i>
              </div>
              <div
                className={`fill-container ${
                  collapsableFill ? "collapsed" : ""
                }`}
              >
                <FormFill handleInput={handleInput} data={data} />
              </div>
            </fieldset>

            <ShareCard
              handleCollapsable={handleCollapsable}
              collapsableShare={collapsableShare}
              handleApi={handleApi}
              dataApi={dataApi}
              data={data}
            />
          </form>
        </main>
        <footer className="page__footer">
          <h6 className="page__footer--title">Tarjetas super molonas @2021</h6>
          <img
            className="page__footer--logo"
            src={superPopLogo}
            alt="Logo de SuperPop"
          />
        </footer>
      </Route>
    </div>
  );
}

export default App;
