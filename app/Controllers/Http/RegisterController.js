'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')

class RegisterController {
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
}

module.exports = RegisterController
