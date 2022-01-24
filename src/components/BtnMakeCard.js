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
              </section>
)}
export default BtnMakeCard;