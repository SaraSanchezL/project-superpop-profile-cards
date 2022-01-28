import shareIconCard from "../images/address-card-regular (2).svg"

const BtnMakeCard = (props) => {
  return( 
  <section className="share_button">
                <button
                  type="submit"
                  className="share_button__item sharebuttonorange"
                  onClick={props.handleApi}
                >
                  <img
                    className="share_button__item--img"
                    src={shareIconCard}
                    title="icon"
                    alt="Comparte"
                  />
                  Crear Tarjeta
                </button>
                <p className="share_creation__title">{props.dataApi.success === false ? "Por favor, asegúrese de que ha cumplimentado todos los campos." : ''}</p>
              </section>
)}
export default BtnMakeCard;