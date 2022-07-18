import error404 from './404.hbs'
import title from '../../../components/title/title'
import a from '../../../components/a/a'
import info from '../../../components/info/info'



import '../error.scss'

export default () => error500({title: title('500'), 
															link: a('Назад к чатам'), 
															info: info('Мы уже фиксим')})


