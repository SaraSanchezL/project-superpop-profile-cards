const Palette = (props) => {
    return (
        <label className="design__label" htmlFor="blue-green">
            <input
                className="design__radio"
                type="radio"
                name="palette"
                id={props.id}
                value={props.value}
                checked={data.palette === "1"}
                onChange={handleInput}
            />
            <div className={`design__color design__color--${props.color1}`}></div>
            <div className={`design__color design__color--${props.color2}`}></div>
            <div className={`design__color design__color--${props.color3}`}></div>
        </label>
    )
}

export default Palette