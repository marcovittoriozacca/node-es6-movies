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

    constructor(title, year, genre, rating, type, season){
        super(title, year, genre, rating, type);
        this.season = season;
    }

    toString(){
        return `${this.title} è una serie tv del genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.season} stagioni. Ha avuto un voto di ${this.rating}.`;
    }
}
// Breaking Bad è una serie tv di genere Drama. La prima stagione è stata rilasciato nel 2008 ed in totale sono state prodotte 5 stagioni. Ha un voto di 9.5

const movie = new Movie('Jaws', 1975, 'Drama', 8, 'Movie' );
const tvSerie = new TvSerie('Breaking Bad', 2008, 'Drana', 9.5, 'TvSerie', '5');

console.log(movie.toString());
console.log(tvSerie.toString());