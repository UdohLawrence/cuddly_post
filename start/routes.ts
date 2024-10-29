const RegisterController = () => import('#controllers/register_controller')
const LogoutController = () => import('#controllers/logout_controller')
const LoginController = () => import('#controllers/login_controller')
const PostController = () => import('#controllers/post_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').render('pages/home')

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])

router.get('/login', [LoginController, 'show'])
router.post('/login',[LoginController, 'store'])

router.group(() => {
  router.delete('/logout', [LogoutController, 'destroy'])
  router.get('/post', [PostController, 'show'])
  router.post('/post', [PostController, 'store'])
}).middleware(middleware.auth())

