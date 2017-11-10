function Personne(nom, prenom, pseudo){
    this.nom = nom
    this.prenom = prenom
    this.pseudo= pseudo
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+ " "+this.pseudo        
    }
}

var jules = new Personne("jules", "LEMAIRE", "jules77")
console.log(jules.nom+" "+jules.prenom+" "+jules.pseudo)

var paul = new Personne("paul", "LEMAIRE", "paul44")
console.log(paul.getNomComplet())

var afficherPersonne = function(personne){
    console.log('Nom : ' + personne.nom + ', Prénom : ' + personne.prenom + ', Pseudo : ' + personne.pseudo + '\nNom complet : ' +  personne.getNomComplet())
}

afficherPersonne(jules)
afficherPersonne(paul)

jules.pseudo="jules44"
afficherPersonne(jules)

console.log("Age : " + jules.age)

Personne.prototype.age = 'NON RENSEIGNE'
console.log("Age : " + jules.age)

jules.age = 30
console.log("Age : " + jules.age)

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0)+this.nom.charAt(0)
}
console.log("Initiale de Jules : " + jules.getInitiales())

var robert = {
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo : "robert77",

    getNomComplet : function(){
        return this.nom + " " + this.prenom + " " + this.pseudo
    }
}

afficherPersonne(robert)

function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient

    this.getInfos = function(){
        return this.numeroClient + ' ' +this.nom + ' ' + this.prenom
    }
}


var steve = new Client("Steve", "LUCAS", "steve44", "A01")

afficherPersonne(steve)

console.log("Numero client : " + steve.numeroClient)

console.log("Infos de Steve : " + steve.getInfos())