//let
let favoriteCityId =  'Rome';
console.log(favoriteCityId);
favoriteCityId = 'Paris';
console.log(favoriteCityId);

//const
const citiesId = ["Paris", "Nyc", "Rome", "Rio-de-Janeiro"];
console.log(citiesId);
//citiesId = [""];
//citiesId.push("");
citiesId.push("Tokyo");
console.log(citiesId);

//création d'objet
function getWeather(cityId) {
    let city = cityId.toLocaleUpperCase();
    let temperature = 20;
    return {city, temperature};
}
console.log(getWeather("paris"));
const weather = getWeather(favoriteCityId);
console.log(weather);

//affectation destructurée
let {
    city: cityW,
    temperature: temperatureW
} = weather;
console.log(cityW);
console.log(temperatureW);

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//classe
class Trip{
    get price(){
        return this.price;
    }
    set price(newPrice){
        this._price = newPrice;
    }
    constructor(id, nom, imageUrl){
        this.id = id;
        this.nom = nom;
        this.imageUrl = imageUrl;
    }
   toString(){
       return  `Trip [${this.id}, ${this.nom}, ${this.imageUrl}]`
   }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.nom);
console.log(parisTrip.toString());
parisTrip.price=100;
Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.nom}, ${this.imageUrl}, ${this._price}]`
}
console.log(parisTrip.toString());
Trip.getDefaultTrip = function(){
    return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
}
const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())

//héritage
class FreeTrip extends Trip{
    constructor(id, nom, imageUrl){
        super(id, nom, imageUrl)
        this._price = 0
    }
}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')
console.log(freeTrip.toString())
FreeTrip.prototype.toString = function(){
    return 'Free' + Trip.prototype.toString.call(this)
}
console.log(freeTrip.toString())

//promise, set, map arrow function
class TripService {
    constructor() {
        this.tripSet = new Set([
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        ])
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let tripFound
                this.tripSet.forEach(trip => {
                    if(trip.name == tripName){
                        tripFound = trip
                    }
                })
                if (tripFound) {
                    resolve(tripFound)   
                } else {
                    reject('No trip with name ' + tripName)
                }
            }
            , 2000)
            
        })
    }
}
class PriceService {
    constructor() {
        this.priceMap = new Map([
            ['paris', 100],
            ['rio-de-janeiro', 800]
        ])
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let price = this.priceMap.get(tripId)
                if (price) {
                    resolve(price)
                } else {
                    reject('No price found for trip id ' + tripId)
                }
            }
            , 2000)
            
        })
    }
}

let tripService = new TripService()
let priceService = new PriceService()

tripService.findByName('Paris')
            .then(trip => console.log('Trip found :', trip))
            .catch(exception => console.log(exception))

tripService.findByName('Toulouse')
            .then(trip => console.log('Trip found :', trip))
            .catch(exception => console.log(exception))


tripService.findByName('Rio de Janeiro')
            .then(trip => priceService.findPriceByTripId(trip.id))
            .then(price => console.log('Price found :', price))
            .catch(exception => console.log(exception))

tripService.findByName('Nantes')
            .then(trip => priceService.findPriceByTripId(trip.id))
            .then(price => console.log('Price found :', price))
            .catch(exception => console.log(exception))
