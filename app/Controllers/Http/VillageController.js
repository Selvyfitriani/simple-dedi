'use strict'

const Post = use('App/Models/Village')

class VillageController {
    async index({ view }) {
        const villages = await Post.all();
        
        return view.render('villages.index', {
            villages: villages.toJSON()
        })    
    } 

    async detail({ params, view }) {
        const village = await Post.find(params.id)

        return view.render('villages.detail', {
            village: village
        })
    }
}

module.exports = VillageController
