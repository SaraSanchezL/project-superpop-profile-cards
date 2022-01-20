

const PreviewIcons = props => {
  // console.log(props)
    return (
      // <ul className="card__list">
      <li>
      <div className={`card__list--icon icon-js iconcircle-${props.dataPalette}`}>
        <a href={props.link} className="js_preview_email card__list--icon-1" target="_blank" rel="noreferrer" >
          <i
            className={props.className}
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </li> 
    // </ul>
    );
  };
  
  export default PreviewIcons;