import main from './main.hbs'
import a from '../../../components/a/a'
import contactItem from '../../../components/contact-item/contact-item'

import '../main.scss'

export default () => main({
	linkProfile: a('Профиль >', '/profile'),
	contactItem
});