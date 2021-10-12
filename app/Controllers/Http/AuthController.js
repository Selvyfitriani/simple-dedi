'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')

class AuthController {
    async register({ request, response, session }) {
        const body = request.all()
        const rules = {
            email: "required|email|unique:users",
            username: "required|unique:users",
            password: "required|min:5"
        }

        const validation = await validate(body, rules)

        if(validation.fails()) {
            return response.badRequest("Use correct params")
        }
       
        const user = await new User()
        user.username = body.username
        user.email = body.email
        user.password = body.password
 
        await user.save()

        return { user: user }
    }

    async login({ request, response, auth }) {
        const { email, password } = request.all()

        return auth
            .withRefreshToken()
            .attempt(email, password)
    }
}

module.exports = AuthController
