'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')

class RegisterController {
    async show( {view} ){
        return view.render("auth.register")
    }

    async register({ request, response, session }) {
        const body = request.all()
        const rules = {
            email: "required|email|unique:users",
            username: "required|unique:users",
            password: "required|min:5"
        }

        const validation = await validate(body, rules)


        if(validation.fails()) {
            session.withErrors(validation.messages()).flashAll()

            return response.redirect('back')
        }

        const newUser = await new User()
        newUser.username = body.username
        newUser.email = body.email
        newUser.password = body.password

        await newUser.save()

        session.flash({ notification: 'User added' })

        return response.redirect('/register')
    }
}

module.exports = RegisterController
