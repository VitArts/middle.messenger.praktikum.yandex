import login from './login.hbs'
import button from '../../../components/button/button'
import a from '../../../components/a/a'
import input from '../../../components/input/input'
import title from '../../../components/title/title'

import '../auth.scss'

export default () => login({
	button: button('Войти'),
	link: a('Нет аккаунта?', '/reg'),
	login: input('Логин', 'login', 'text'),
	password: input('Пароль', 'password', 'password'),
	title: title('Вход')
})