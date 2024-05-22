const objects = require('./objects');

//class Movie
class Movie {

    //constructor to set the attributes
    constructor(title, year, genre, rating, type){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    //to string method that returns a string with info
    toString(){
        return `${this.title} è un film del genere ${this.genre}. Rilasciato nel ${this.year} ed ha avuto un voto di ${this.rating}.`;
    }
}

//class TvSeriex, extends Movie
class TvSerie extends Movie {

    //costrunctor with super to invoke Movie constructor with his values
    constructor(title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    toString(){
        return `${this.title} è una serie tv del genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha avuto un voto di ${this.rating}.`;
    }
}


const instantiation = array => {
    const instantiatedElements = array.map(el => {
        const {title, year, genre, rating, type} = el;

        if(type === 'movie'){
            return new Movie(title, year, genre, rating, type);
        }else if(type === 'tv'){
            return new TvSerie(title, year, genre, rating, type, el.seasons);
        }else{
            throw new Error('invalid type, expected "movie" or "tv"');
        }
    })
    return instantiatedElements;
}

const newArray = instantiation(objects);

