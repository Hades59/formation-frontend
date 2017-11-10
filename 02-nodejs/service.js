var data = require('./data/devfest-2015')
exports.listerTousLesPresentateurs = function() {
    return data.speakers
}


exports.listerToutesLesSessions = function() {
    return data.sessions
}

exports.trouverUneSession = function(id) {
    return data.sessions.find(session => session.id = id)
}

exports.listerTopPresentateurs = function() {
    return data.speakers.filter(function(TopS){
        return TopS.topspeaker == true
    })
}