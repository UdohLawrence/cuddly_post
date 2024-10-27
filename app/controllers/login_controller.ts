import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async store({ auth, request, response, session }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      const user = await User.verifyCredentials(email, password)

      await auth.use('web').login(user)

      session.flash({
        notification: {
          type: 'success',
          message: 'You have succesfully logged in!',
        },
      })

      return response.redirect('/')
    } catch (error) {
      session.flash({
        notification: {
          type: 'error',
          message: 'Invalid Credentials!',
        },
      })
      return response.redirect().back()
    }
  }
}
