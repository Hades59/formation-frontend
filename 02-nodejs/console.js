const readline = require('readline');
var service = require('./service')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Menu ={
        "1":{
            libelle:"1. Liste de tous les présentateurs",
            execute: function() {                
                service.listerTousLesPresentateurs().forEach(function(sp){
                    console.log(sp.firstname+" "+sp.lastname)
                })
            }
        },

        "2":{
            libelle:"2. Top présentateurs",
            execute: function() {
                service.listerTopPresentateurs().forEach(function(sp){
                    console.log(sp.firstname+" "+sp.lastname)
                })
            }
        },
        
        "3":{
            libelle:"3. Liste des sessions",
            execute: function() {
                service.listerToutesLesSessions().forEach(function(s){
                    console.log(s.title+" "+s.type)
                })
            }
        },

        "4":{
            libelle:"4. Détail d'une session",
            execute: function() {   
                rl.question('Saisir une session! \n ', (choice) => {
                    var session = service.trouverUneSession(choice)
                    console.log(session.title + '\n' + session.type)
                    
                   })
              
            }
        },

        "99":{
            libelle:"99. Quitter Système",
            execute: function(){
                rl.close();
            }
        }
}

function displayMenu() {
    console.log("*** Application Conférence ***")
}

(function(){
    displayMenu()
    for (choix in Menu) {
        console.log(Menu[choix].libelle)

    }

    rl.question('Saisir !!!!!! \n ', (choix) => {
       Menu[choix].execute()
      });
})()