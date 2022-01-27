const InputLabel = (props) => {
  const handleChangeInput = (ev) => {
    props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
  };
  return (
    <label className="fill__label" htmlFor={props.htmlFor}>
      {props.label}
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChangeInput}
      />
    </label>
  );
};

export default InputLabel;
