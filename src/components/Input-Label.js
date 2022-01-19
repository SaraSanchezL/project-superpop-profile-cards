const InputLabel = (props) => {
  return (
    <label className="fill__label" htmlFor={props.htmlFor}>
      {props.label}
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        //value={data.name}
        //onChange={handleInput}
      />
    </label>
  );
};

export default InputLabel;
