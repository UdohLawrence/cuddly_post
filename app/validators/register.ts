import vine from '@vinejs/vine'

export const RegisterValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(3).maxLength(20).trim(),
    surname: vine.string().minLength(3).maxLength(20).trim(),

    username: vine.string().unique(async (db, value) => {
      const result = await db.from('users').select('username').where('username', value).first()

      return result ? false: true
    }),

     email: vine.string().email().unique(async (db, value) => {
      const result = await db.from('users').select('email').where('email', value).first()

      return result ? false: true
    }),
    password: vine.string().alphaNumeric().minLength(8).confirmed()
  })
)