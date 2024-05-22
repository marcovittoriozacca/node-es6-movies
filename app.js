const objects = require('./objects');

//class Movie
class Movie {
    constructor(title, year, genre, rating, type){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString(){
        return `${this.title} è un film del genere ${this.genre}. Rilasciato nel ${this.year} ed ha avuto un voto di ${this.rating}.`;
    }
}

class TvSerie extends Movie {

    constructor(title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    toString(){
        return `${this.title} è una serie tv del genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha avuto un voto di ${this.rating}.`;
    }
}