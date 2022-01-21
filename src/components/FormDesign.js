import Palette from "./Palette"

const FormDesign = (props) => {
    return (
        <>
            <h4 className="design__title">Colores</h4>
            <div className="options-container">
                <Palette id="blue-green" value="1" color1="primary-blue" color2="dirty-blue" color3="green" handleInput={props.handleInput} checked={`${props.data.palette} === 1`} />
                <Palette id="red-orange" value="2" color1="dried-blood" color2="red" color3="tomato" handleInput={props.handleInput} checked={`${props.data.palette} === 2`} />
                <Palette id="color-mix" value="3" color1="slate" color2="yellow" color3="sky-blue" handleInput={props.handleInput} checked={`${props.data.palette} === 3`} />
            </div>
        </>
    )
}

export default FormDesign