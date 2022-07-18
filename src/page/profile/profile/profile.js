import profile from './profile.hbs'
import prof from '../../../components/profile/profile'
import a from '../../../components/a/a'
import avatar from '../../../components/avatar/avatar'
import nav from '../../../components/navigation/navigation'

import '../profile.scss'

export default () => profile({prof, 
															avatar:avatar('/static/ava.svg','Иван'),
														 	edit:a('Изменить данные', '/profile/edit'),
															editPassword:a('Изменить пароль', '/profile/edit/pass'),
															nav:nav('/'),
															exit:a('Выйти', '/login', 'red')})