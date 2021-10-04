'use strict'

class VillageController {
    async index({ view }) {
        const villages = [
            {name: 'Village 1'},
            {name: 'Village 2'}
        ]

        return view.render('villages.index', {
            villages: villages
        })    
    } 
}

module.exports = VillageController
