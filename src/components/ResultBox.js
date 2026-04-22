function ResultBox(props){
  var data = props.data

  if(!data){
    return null
  }

  return (
    <div className="result">
      <h2 className="result__title">Отправлено</h2>
      <p className="result__line"><b>Имя:</b> {data.name}</p>
      <p className="result__line"><b>Email:</b> {data.email}</p>
      <p className="result__line"><b>Пароль:</b> {data.password}</p>
    </div>
  )
}

export default ResultBox
