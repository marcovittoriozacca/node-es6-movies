const objects = require('./objects');

//class Movie
class Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;
    #price = 3.99;
    //constructor to set the attributes
    constructor(title, year, genre, rating, type){
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    //to string method that returns a string with info
    toString(){
        return `${this.#title} è un film del genere ${this.#genre}. Rilasciato nel ${this.#year} ed ha avuto un voto di ${this.#rating}.`;
    }

    get title(){
        return this.#title;
    }

    get year(){
        return this.#year;
    }

    get genre(){
        return this.#genre;
    }

    get rating(){
        return this.#rating;
    }

    get type(){
        return this.#type;
    }
    get price(){
        return this.#price;
    }

    set title(title){
        return this.#title = title;
    }

    set year(year){
        return this.#year = year;
    }

    set genre(genre){
        return this.#genre = genre;
    }

    set rating(rating){
        return this.#rating = rating;
    }

}

//class TvSeriex, extends Movie
class TvSerie extends Movie {
    #seasons;
    //costrunctor with super to invoke Movie constructor with his values
    constructor(title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }

    toString(){
        return `${this.title} è una serie tv del genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.#seasons} stagioni. Ha avuto un voto di ${this.rating}.`;
    }
    get seasons(){
        return this.#seasons;
    }
    set seasons(seasons){
        return this.#seasons = seasons;
    }
}

class Cart {
    #cart = [];

    get cart(){
        return this.#cart;
    }
    set cart(elements){
        return this.#cart = [...elements];
    }

    addToCart(array, elements){
        const filteredArray = array.filter((element) => elements.includes(element.title));
        this.#cart = [...this.#cart, ...filteredArray];
    }

    removeFromCart(elements){
        const filteredArray = this.#cart.filter((element) => !elements.includes(element.title));
        this.#cart = [...filteredArray];
    }

    getPrice(){
        if(this.#cart.length === 0){
            return 0
        }else{
            const price = this.#cart.reduce((acc, element) => acc + element.price, 0);
            
            return price;
        }
    }

}



//function that instantiate all elements in the "objects" array based on the type
const instantiation = array => {

    const instantiatedElements = array.map(el => {
        const type = el.type;
        
        if(type === 'movie'){
            return new Movie(el.title, el.year, el.genre, el.rating, type);
        }else if(type === 'tv'){
            return new TvSerie(el.title, el.year, el.genre, el.rating, type, el.seasons);
        }else{
            throw new Error('invalid type, expected "movie" or "tv"');
        }
    })
    return instantiatedElements;
}

//function that returns the average rating base on the genre and the type
const averageRating = (array, genre, type) => {
    const filteredArray = array.filter((element) => element.type === type && element.genre === genre);
    
    const sum = filteredArray.reduce((acc, element) => acc + element.rating, 0);
    const avarage = sum / filteredArray.length;

    return `The average rating for the genre ${genre} is: ${avarage.toFixed(2)}`;
    
}
//return every genre based on the type provided (movie or tv).
const getAllGenres = (array, type) => {
    const allGenres = array.map((element)=> {
       if(element.type === type){
        return element.genre;
       }
    });

    const noDup = new Set(allGenres);
    noDup.delete(undefined);

    const arr = [...noDup];

    return arr;
}

const getInfoFromGenre = (array, genre, type) => {
    const filteredArray = array.filter((element) => element.type === type && element.genre === genre);
    filteredArray.forEach((element) => console.log(element.toString()));
}

//instantiate all elements using the instantiation function
const instantiatedElements = instantiation(objects);

console.log(getAllGenres(instantiatedElements, 'movie'));
//check the average rating based on the arguments passed
console.log(averageRating(instantiatedElements, 'Crime', 'tv'));
console.log(averageRating(instantiatedElements, 'Drama', 'movie'));


getInfoFromGenre(instantiatedElements, 'Drama', 'movie');


const cart = new Cart;
cart.addToCart(instantiatedElements, ['The Dark Knight', 'Pulp Fiction']);
console.log(cart.getPrice());
cart.removeFromCart(['The Dark Knight']);
console.log(cart.getPrice());


