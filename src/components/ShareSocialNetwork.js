
 const ShareSocialNetwork = (props) => {
   return(

    
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={props.className}
                  href={props.href}
                >
                  <img
                    className="share_creation__twitter--img"
                    src={props.img}
                    alt={props.alt}
                  />
                 {props.text}
                </a>
              
   )
 }

 export default ShareSocialNetwork;