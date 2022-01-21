import InputLabel from "./InputLabel";
const FormFill = (props) => {
  return (
    <>
      <InputLabel
        type="text"
        className="fill__input fill__input-js js-fullname"
        name="name"
        id="name"
        placeholder="Ej.: Sally Jill"
        label="Nombre Completo"
        htmlFor="name"
        handleInput={props.handleInput}
        value={props.data.name}
      />

      <InputLabel
        type="text"
        className="fill__input fill__input-js js-job"
        name="job"
        id="job"
        placeholder="Ej.: Front-end unicorn"
        label="Puesto"
        htmlFor="job"
        handleInput={props.handleInput}
        value={props.data.job}
      />

      <div className="fill__label" htmlFor="profilePic">
        <p className="label__img">Imagen de perfil</p>
        <label className="fill__btn js__profile-trigger" htmlFor="img-selector">
          Añadir imagen
        </label>
        <input
          className="action__hiddenField js__profile-upload-btn hidden"
          type="file"
          name="photo"
          id="img-selector"
        />
        <div className="label__container profile">
          <div className="fill__profile-pic profile__image js__profile-image"></div>
        </div>
      </div>

      <InputLabel
        type="email"
        className="fill__input fill__input-js js-email"
        name="email"
        id="email"
        placeholder="Ej.: sally-hill@gmail.com"
        label="Email"
        htmlFor="email"
        handleInput={props.handleInput}
        value={props.data.email}
      />

      <InputLabel
        type="tel"
        className="fill__input fill__input-js js-phone"
        name="phone"
        id="phone"
        placeholder="Ej.: 555-555-555"
        label="Teléfono"
        htmlFor="phone"
        handleInput={props.handleInput}
        value={props.data.tel}
      />
      <InputLabel
        type="text"
        className="fill__input fill__input-js js-linkedin"
        name="linkedin"
        id="linkedin"
        placeholder="Ej.: linkedin.com/in/sally.hill"
        label="Linkedin"
        htmlFor="linkedin"
        handleInput={props.handleInput}
        value={props.data.linkedin}
      />
      <InputLabel
        type="text"
        className="fill__input fill__input-js js-github"
        name="github"
        id="github"
        placeholder="Ej.: @sally-hill"
        label="Github"
        htmlFor="github"
        handleInput={props.handleInput}
        value={props.data.github}
      />
    </>
  );
};

export default FormFill;
