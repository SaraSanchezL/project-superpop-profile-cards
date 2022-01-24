const Palette = (props) => {

    const handleChangeInput = (ev) => {
        props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
    };

    return (
        <label className="design__label" htmlFor={props.id}>
            <input
                className="design__radio"
                type="radio"
                name="palette"
                id={props.id}
                value={props.value}
                onChange={handleChangeInput}
                checked={props.data.palette === props.value}
            />
            <div className={`design__color design__color--${props.color1}`}></div>
            <div className={`design__color design__color--${props.color2}`}></div>
            <div className={`design__color design__color--${props.color3}`}></div>
        </label>
    )
}

export default Palette