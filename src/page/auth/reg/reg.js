import reg from './reg.hbs'
import button from '../../../components/button/button'
import a from '../../../components/a/a'
import input from '../../../components/input/input'
import title from '../../../components/title/title'
import '../auth.scss'

export default () => reg({button: button('Зарегистрироваться') , 
													link: a('Войти', '/login'),
													title: title('Регистрация'),
													email: input('Почта', 'email', 'email'),
													login: input('Логин', 'login', 'text'),
													firstName: input('Имя', 'first_name', 'text'), 
													secondName: input('Имя', 'second_name', 'text'),
													phone: input('Телефон', 'phone', 'tel'),
													password: input('Пароль', 'password', 'password'),
													passwordTwo: input('Пароль (еще раз)', 'passwordTwo', 'password') })