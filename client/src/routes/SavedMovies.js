import { useContext } from "react";
import { AppContext } from "../AppContext"

export default function SavedMovies() {
    const { List } = useContext(AppContext)
    
    return (
        <div className="savedMovies">
            {List}
        </div>
    )
}