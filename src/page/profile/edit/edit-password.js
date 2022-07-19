import editPassword from './edit-password.hbs'
import nav from '../../../components/navigation/navigation'
import input from '../../../components/input/input'
import button from '../../../components/button/button'
import avatar from '../../../components/avatar/avatar'

import '../profile.scss'

export default () => editPassword({
	nav: nav('/profile'),
	oldPassword: input('Старый пароль', 'old_password', 'password'),
	Password: input('Новый пароль', 'password', 'password'),
	PasswordTwo: input('Повторите новый пароль', 'passwordTwo', 'password'),
	button: button('Сохранить'),
	avatar: avatar('/static/ava.svg')
})