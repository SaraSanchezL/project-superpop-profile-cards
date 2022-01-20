import trashRegular from "../images/trash-alt-regular.svg";

const PreviewBtnReset = props => {
  console.log(props)
    return (

    <button
              className="reset__button js-resetBtn"
              type="reset"
              form="form"
              onClick={props.handleReset}
            >
              <span className="reset__button--icon">
                <img src={trashRegular} alt="Icono de Papelera" />
              </span>
              <small className="reset__button--reset"> Reset</small>
            </button>
 
    );
  };
  
  export default PreviewBtnReset;