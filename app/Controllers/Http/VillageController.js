'use strict'

const { url } = require("@adonisjs/framework/src/Route/Manager");

const Village = use('App/Models/Village')


const { validate } = use('Validator')

class VillageController {
    async index() {
        const villages = await Village.all();
        
        return {villages: villages.toJSON()}
    } 

    async detail({ params }) {
        const village = await Village.find(params.id)

        return { village: village }
    }

    async create({ request, response }) {
        // Validate input
        const validation = await validate(request.all(), {
            name: 'required|min:3|max:255'
        })

        if(validation.fails()) {
            return response.badRequest("Use correct params")
        }
        
        const village = new Village()
        village.name = request.input('name')

        await village.save()

        const url_target = '/villages/' + village.id
        return response.redirect(url_target)
    }

    async update({ request, response }) {
        const validation = await validate(request.all(), {
            id: 'required',
            name: 'required|min:3|max:255'
        })

        if(validation.fails()) {
            return response.badRequest("Use correct params")
        }

        const id = request.input("id")
        const village = await Village.find(id)

        village.merge(request.all())

        await village.save()

        const url_target = '/villages/' + village.id
        return response.redirect(url_target)
    }

    async delete({ request, response }) {
        const id = request.input("id")
        const village = await Village.find(id)

        if (village !== null) {
            await village.delete() 
        }

        return response.redirect('/villages')
    }

}
    
module.exports = VillageController
