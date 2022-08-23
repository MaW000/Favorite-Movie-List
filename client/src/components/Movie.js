import { useContext } from "react";
import { AppContext } from "../AppContext"

export default function Movie() {
    const { Title, Poster, Year, Rated, imdbRating, Plot, HandleSave } = useContext(AppContext)
    
    
    

    return (
        <div className="movie">
            <div className="movie-obj">
                <img src={Poster} alt=''></img>
                <h1>{Title}</h1>
                <div className="movie-row">
                    <h2>{Year}</h2>
                    <h2>{Rated}</h2>
                    <h2>{imdbRating}</h2>
                </div>
                <p className="movie-plot">{Plot}</p>
                <button onClick={HandleSave}className="save">Save</button>
            </div>
        </div>
    )
}
