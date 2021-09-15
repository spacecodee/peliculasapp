import './App.css';
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Movie from "./components/movie/Movie";
import moviesToJson from "./private/movies.json"
import Pagination from "./components/Pagination/Pagination";
import {useState} from "react";

function App() {

    const [actualPage, setActualPage] = useState(1);
    const TOTAL_PAGE = 8;

    let movies = moviesToJson;

    const searchMovie = async () => {
        const url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';

        let response = await fetch(url, {
            'method': 'GET',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'https://lucasmoy.dev/'
            }
        });

        let json = await response.json();
        alert(json);
    }

    const loadMovies = () => {
        movies = movies.slice(
            (actualPage - 1) * TOTAL_PAGE, actualPage * TOTAL_PAGE
        );
    }

    const getTotalPages = () => {
        let quantityTotalPages = moviesToJson.length;
        return Math.ceil(quantityTotalPages / TOTAL_PAGE);
    }

    loadMovies();

    return (
        <div className="App">
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
        </div>
    );
}

export default App;
