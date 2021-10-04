'use strict'

const Village = use('App/Models/Village')

const { validate } = use('Validator')

class VillageController {
    async index({ view }) {
        const villages = await Village.all();
        
        return view.render('villages.index', {
            villages: villages.toJSON()
        })    
    } 

    async detail({ params, view }) {
        const village = await Village.find(params.id)

        return view.render('villages.detail', {
            village: village
        })
    }

    async create({ view }) {
        return view.render('villages.create')
    }

    async store({ request, response, session }) {
        // Validate input
        const validation = await validate(request.all(), {
            name: 'required|min:3|max:255'
        })

        if(validation.fails()) {
            session.withErrors(validation.messages()).flashAll()

            return response.redirect('back')
        }

        const village = new Village()

        village.name = request.input('name')

        await village.save()

        session.flash({ notification: 'Village added' })

        return response.redirect('/villages')
    }
}
    
module.exports = VillageController
