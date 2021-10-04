'use strict'

const Post = use('App/Models/Village')

class VillageController {
    async index({ view }) {
        const villages = await Post.all();
        
        return view.render('villages.index', {
            villages: villages.toJSON()
        })    
    } 
}

module.exports = VillageController
