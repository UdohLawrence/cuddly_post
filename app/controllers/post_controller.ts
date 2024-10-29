import { PostValidator } from '#validators/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostController {
  async show({ view }: HttpContext){
    return view.render('pages/createPost')
  }

  async store({ auth, request, response, session }: HttpContext){
    const { content } = await request.validateUsing(PostValidator)

    await auth.user!.related('posts').create({content})

    session.flash({
      notification: {
        type: 'success',
        message: 'Post Created'
      }
    })

    return response.redirect('/')
  }
}