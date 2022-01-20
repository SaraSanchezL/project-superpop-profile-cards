import Palette from "./Palette"

const FormFill = () => {
    return (
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
                    className={`legend__arrow fas ${collapsablePalette ? "fa-chevron-down" : "fa-chevron-up"
                        }`}
                    alt="arrow"
                ></i>
            </div>
            <div
                className={`design-container js-container ${collapsablePalette ? "collapsed" : ""
                    }`}
            >
                <h4 className="design__title">Colores</h4>
                <div className="options-container">
                    <Palette id="blue-green" value="1" color1="primary-blue" color2="dirty-blue" color3="green" />
                    <Palette id="red-orange" value="2" color1="dried-blood" color2="red" color3="tomato" />
                    <Palette id="color-mix" value="3" color1="slate" color2="yellow" color3="sky-blue" />
                    {/* <label className="design__label" htmlFor="blue-green">
                    <input
                        className="design__radio"
                        type="radio"
                        name="palette"
                        id="blue-green"
                        value="1"
                        checked={data.palette === "1"}
                        onChange={handleInput}
                    />
                    <div className="design__color design__color--primary-blue"></div>
                    <div className="design__color design__color--dirty-blue"></div>
                    <div className="design__color design__color--green"></div>
                </label>

                <label className="design__label" htmlFor="red-orange">
                    <input
                        className="design__radio"
                        type="radio"
                        name="palette"
                        id="red-orange"
                        value="2"
                        checked={data.palette === "2"}
                        onChange={handleInput}
                    />
                    <div className="design__color design__color--dried-blood"></div>
                    <div className="design__color design__color--red"></div>
                    <div className="design__color design__color--tomato"></div>
                </label>

                <label className="design__label" htmlFor="color-mix">
                    <input
                        className="design__radio"
                        type="radio"
                        name="palette"
                        id="color-mix"
                        value="3"
                        checked={data.palette === "3"}
                        onChange={handleInput}
                    />
                    <div className="design__color design__color--slate"></div>
                    <div className="design__color design__color--yellow"></div>
                    <div className="design__color design__color--sky-blue"></div>
                </label> */}
                </div>
            </div>
        </fieldset>
    )
}

export default FormFill