var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']
villes.forEach(aff => console.log(aff))

var lettreADansToutesLesVilles = villes.every(a => a.includes("a"))
console.log("lettreADansToutesLesVilles == "+lettreADansToutesLesVilles)

var auMoinsUneVilleAvecUnTiret = villes.some(tiret => tiret.includes("-"))
console.log("auMoinsUneVilleAvecUnTiret == "+auMoinsUneVilleAvecUnTiret)

var villesSansTiretSansEspace = villes.filter(v => !v.includes(" - ") && !v.includes(" "))
console.log("villesSansTiretSansEspace == [ '"+villesSansTiretSansEspace+"']")

var villesMajusculeSeTerminantParS = villes.filter(v => v.slice(-1) == "s").map(v => v.toLocaleUpperCase())
console.log("villesMajusculeSeTerminantParS == ['"+villesMajusculeSeTerminantParS+"']")