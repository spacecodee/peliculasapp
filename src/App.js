import './App.css';
import ListMovies from "./components/ListMovies/ListMovies";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Blog from "./components/blog/Blog";

function App() {

    return (
        <BrowserRouter className="App">
            <Switch>
                <Route path="/blog">
                    <Blog/>
                </Route>

                <Route path="/">
                    <ListMovies/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
