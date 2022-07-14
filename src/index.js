import main from './page/home/main/main'
import chat from './page/home/chat/chat'
import login from './page/auth/login/login'
import reg from './page/auth/reg/reg'
import profile from './page/profile/profile/profile'
import profileEdit from './page/profile/edit/edit-profile'
import profileEditPassword from './page/profile/edit/edit-password'
import error from './page/error/404/404'

import './style.scss';

const app = document.querySelector('#app');
let src = window.location.pathname

if (src[src.length - 1] !== '/' ) {
	src+= '/'
}

const page = {
	'/': main,
	'/chat/': chat,
	'/login/': login,
	'/reg/': reg,
	'/profile/': profile,
	'/profile/edit/': profileEdit,
	'/profile/edit/pass/': profileEditPassword,
}

app.innerHTML = (page[src] || error)()