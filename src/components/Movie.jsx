
function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id = {id} className="movie card">
        <div className="card__image">
            {
                poster === 'N/A' ? (
                    <img 
                        className="activator" alt =""
                        src = {`https://via.placeholder.com/300x400?text=${title}`} //Проблемы с шаблонной строкой
                    />
                ) :
                    <img className="activator" alt ="" src = {poster} />
            }
        </div>
        <div className="card__content">
            <span className="card__title">{title}</span>
            <p>{year} <span>{type}</span> </p>
        </div>
    </div>;
}

export { Movie };