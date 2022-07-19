import chat from './chat.hbs'
import a from '../../../components/a/a'
import contactItem from '../../../components/contact-item/contact-item'
import '../main.scss'

export default () => chat({
	linkProfile: a('Профиль >', '/profile'),
	contactItem
});