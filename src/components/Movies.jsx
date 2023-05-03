import { Movie } from './Movie';
import MyImg from './Sad.jpg' 

function Movies (props) {
const { movies = [] } = props;

    return <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key = {movie.imbID} {...movie} />)
        ) : (
            <div className="not-found">
                <h4>Not found :(</h4>
                <img src={ MyImg } alt="img" />
            </div>
            
        )}
    </div>;
}

export { Movies };  