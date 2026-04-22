import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Field from './components/Field'
import ResultBox from './components/ResultBox'

function App(){
  var st = useState(null)
  var res = st[0]
  var setRes = st[1]

  var f = useForm()
  var register = f.register
  var handleSubmit = f.handleSubmit
  var errors = f.formState.errors
  var reset = f.reset
  var getValues = f.getValues

  function onSend(data){
    setRes({
      name: data.name,
      email: data.email,
      password: data.password
    })

    toast.success('Регистрация прошла успешно')
    reset()
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="card__title">Форма регистрации</h1>

        <form className="form" onSubmit={handleSubmit(onSend)}>
          <Field
            label="Имя"
            type="text"
            name="name"
            placeholder="Введите имя"
            register={register}
            rules={{ required: 'Имя обязательно' }}
            error={errors.name}
          />

          <Field
            label="Email"
            type="email"
            name="email"
            placeholder="Введите email"
            register={register}
            rules={{
              required: 'Email обязателен',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Неверный формат email'
              }
            }}
            error={errors.email}
          />

          <Field
            label="Пароль"
            type="password"
            name="password"
            placeholder="Минимум 6 символов"
            register={register}
            rules={{
              required: 'Пароль обязателен',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              }
            }}
            error={errors.password}
          />

          <Field
            label="Подтверждение пароля"
            type="password"
            name="confirmPassword"
            placeholder="Повторите пароль"
            register={register}
            rules={{
              required: 'Подтверждение обязательно',
              validate: function(v){
                if(v !== getValues('password')){
                  return 'Пароли не совпадают'
                }
                return true
              }
            }}
            error={errors.confirmPassword}
          />

          <button className="form__btn" type="submit">Зарегистрироваться</button>
        </form>
      </div>

      <ResultBox data={res} />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
