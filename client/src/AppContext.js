import React from "react";
import  { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/Movies";
const AppContext = React.createContext()

const AppContextProvider = (props) => {
    const [inputs,setInputs] = useState({
        title: 'a',
        year: ''
      })
    
    const [movieData, setMovieData] = useState({
        Title:'',
        Year:'',
        Rated:'',
        imdbRating:'',
        Poster:'',
        Plot:''
    })

    const [savedMovies, setSavedMovies] = useState([])

    useEffect(() => {
        axios.get('/movie')
            .then(res => setSavedMovies(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?t=${inputs.title}&y=${inputs.year}&apikey=c450e1a6`)
        .then((res) => {
            if (Object.keys(res.data).length > 3) {
                setMovieData({Title:res.data.Title,Year:res.data.Year,Rated:res.data.Rated,Released:res.data.Released,Poster:res.data.Poster,imdbRating:res.data.imdbRating,Plot:res.data.Plot})
            } return
    })
    }, [inputs])

    const HandleDelete = (id) => {
        axios.delete(`/movie/${id}`)
            .then(res => {
                setSavedMovies(movies => movies.filter((movie) => movie._id !== id))
            })
            .catch(err => console.log(err))
    }
    
    const HandleChange = (e) => {
        const { name, value } = e.target

        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const HandleSave = () => {
        axios.post('/movie', movieData)
            .then(res => {
                setSavedMovies(movie => [...movie, res.data])
            })
            .catch(err => console.log(err))
    }
    
    const List = savedMovies.map(item => {
        return (
            <Movies
                Title = {item.Title}
                Year = {item.Year}
                Rated = {item.Rated}
                imdbRating = {item.imdbRating}
                Poster = {item.Poster}
                Plot = {item.Plot}
                id = {item._id}
                HandleDelete = {HandleDelete}
                key = {item._id}
            />
        )
    })

    return(
        <AppContext.Provider value={{
            HandleChange,
            HandleSave,
            HandleDelete,
            inputs,
            List,
            savedMovies,
            Title: movieData.Title,
            Year: movieData.Year,
            Rated: movieData.Rated,
            Poster: movieData.Poster,
            imdbRating: movieData.imdbRating,
            Plot: movieData.Plot,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}