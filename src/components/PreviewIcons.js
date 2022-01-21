const PreviewIcons = (props) => {
  return (
    <li>
      <div
        className={`card__list--icon icon-js iconcircle-${props.dataPalette}`}
      >
        <a
          href={props.link}
          className="js_preview_email card__list--icon-1"
          target="_blank"
          rel="noreferrer"
        >
          <i className={props.className} aria-hidden="true"></i>
        </a>
      </div>
    </li>
  );
};

export default PreviewIcons;
