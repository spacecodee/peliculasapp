import {useEffect, useState} from "react";
import Pagination from "../Pagination/Pagination";
import Movie from "../movie/Movie";
import PageWrapper from "../PageWrapper/PageWrapper";
import moviesToJson from "../../private/movies"

function ListMovies() {

    const [actualPage, setActualPage] = useState(1);
    let [movies, setMovies] = useState([]);
    const TOTAL_PAGE = 4;

    useEffect(() => {
        searchMovie();
    }, []);

    movies = moviesToJson;

    const searchMovie = () => {
        /*const url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';

        let response = await fetch(url, {
            'method': 'GET',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'https://lucasmoy.dev/'
            }
        });

        let json = await response.json();
        alert(json);*/
        movies = moviesToJson;
    }

    const loadMovies = () => {
        movies = movies.slice(
            (actualPage - 1) * TOTAL_PAGE, actualPage * TOTAL_PAGE
        );
    }

    const getTotalPages = () => {
        const quantityTotalPages = moviesToJson.length;
        return Math.ceil(quantityTotalPages / TOTAL_PAGE);
    }

    loadMovies();

    return (
        <PageWrapper>
            {
                movies.map(movie =>
                    <Movie title={movie.title}
                           rate={movie.rate}
                           director={movie.director}
                           actors={movie.actors}
                           date={movie.date}
                           duration={movie.duration}
                           img={movie.img}
                    >
                        {movie.description}
                    </Movie>
                )
            }

            <Pagination page={actualPage}
                        total={getTotalPages()}
                        onChange={(page) => {
                            setActualPage(page)
                        }}
            />
        </PageWrapper>
    );
}

export default ListMovies;
