export default function Movies(props) {
    return (
        <div className="movies" >
            <div className="movies-obj">
                <img className="movies-poster" src={props.Poster} alt=""></img>
                <h1>{props.Title}</h1>
            <div className="movies-row">
                <h2>{props.Year}</h2>
                <h2>{props.Rated}</h2>
                <h2>{props.imdbRating}</h2>
            </div>
            <p className="movies-plot">{props.Plot}</p>
            </div>
            <button className="del-btn" onClick={() => props.HandleDelete(props.id)}>Delete</button>
        </div>
    )
}