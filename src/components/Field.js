function Field(props){
  var err = props.error

  return (
    <div className="form__group">
      <label className="form__label" htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        className={err ? 'form__input form__input_error' : 'form__input'}
        placeholder={props.placeholder}
        {...props.register(props.name,props.rules)}
      />
      {err ? <p className="form__err">{err.message}</p> : null}
    </div>
  )
}

export default Field
