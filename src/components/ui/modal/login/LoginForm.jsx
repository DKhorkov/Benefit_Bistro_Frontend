import PropTypes from 'prop-types'
import Form from '../../form/Form.jsx'
import Label from '../../label/Label'
import Input from '../../input/Input.jsx'
import Button from '../../button/Button.jsx'
import login from '../../../../api/login.js'
import './LoginForm.css'

export default function LoginForm({ afterLoginFunc }) {
  async function handleSubmit(event) {
    event.preventDefault()

    const loginParams = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    }

    const response = await login(loginParams.username, loginParams.password)
    if (!response.ok) {
      alert(response.statusText)
    } else {
      alert('Вы были успешно авторизованы!')
    }

    afterLoginFunc()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="username">Username или email:</Label>
      <Input
        inputType="text"
        inputName="username"
      />
      <br />
      <Label htmlFor="password">Пароль: </Label>
      <Input
        inputType="password"
        inputName="password"
      />
      <br />
      <Button buttonType="submit">Отправить</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  afterLoginFunc: PropTypes.func.isRequired
}
