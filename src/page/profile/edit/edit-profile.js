import editProfile from './edit-profile.hbs'
import button from '../../../components/button/button'
import avatar from '../../../components/avatar/avatar'
import nav from '../../../components/navigation/navigation'
import input from '../../../components/input/input'
import '../profile.scss'

export default () => editProfile({
	nav: nav('/profile'),
	avatar: avatar('/static/ava.svg', 'Иван'),
	button: button('Сохранить'),
	email: input('Почта', 'email', 'email', 'pochta@yandex.ru'),
	login: input('Логин', 'login', 'text', 'ivanivanov', 'Ивivanivanovан'),
	firstName: input('Имя', 'first_name', 'text', 'Иван'),
	secondName: input('Фамилия', 'second_name', 'text', 'Иванов'),
	nameChat: input('Имя в чате', 'display_name', 'Иван', 'Иван'),
	phone: input('Телефон', 'phone', 'tel', '+7 (999) 999-99-99'),
})