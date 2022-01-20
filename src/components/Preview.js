

const Preview = props => {
  console.log(props)
    return (

  <>
       <div className="card__title">
                <div className={`card__title--rectangle rectangle-js rectangle-${props.dataPalette}`}></div>
                <div className="card__title--text">
                  <h3 className={`name name-${props.dataPalette} js-nameInput fullname-js`}>
                    {props.dataName || 'nombre y apellidos'}
                  </h3>
                  <h4 className="subtitle js-jobInput">
                    {props.dataJob || 'Front-end Developer'}
                  </h4>
                </div>
              </div>
  
  </>
 
    );
  };
  
  export default Preview;