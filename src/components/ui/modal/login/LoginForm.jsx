import Form from '../../form/Form.jsx'
import Label from '../../label/Label'
import Input from '../../input/Input.jsx'
import Button from '../../button/Button.jsx'
import config from '../../../../config.json'
import './LoginForm.css'

async function handleSubmit(event) {
  event.preventDefault()

  const requestOptions = {
    method: config.requests.login.method,
    headers: config.requests.headers,
    credentials: config.requests.credentials,
    body: JSON.stringify({
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    })
  }

  const response = await fetch(config.requests.login.url, requestOptions)

  if (!response.ok) {
    alert(response.statusText)
  } else {
    alert('Вы были успешно авторизованы!')
  }
}

export default function LoginForm() {
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
