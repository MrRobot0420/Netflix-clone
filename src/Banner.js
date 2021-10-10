import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Banner.css'

const Banner = (props) => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=7cb9ed4a7e83ed86a70af6e4cee22a72&with_networks=213")
        .then((response) => {
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }} >
            <div className="banner__contents" >
                <h1 className="banner__title" > {movie?.title || movie.name || movie?.original_name} </h1>
                <div className="banner__buttons" >
                    <button className="banner__button" > Play </button>
                    <button className="banner__button" > My List </button>
                </div>
                <h1 className="banner__description" > {movie.overview} {truncate(movie?.overview, 150)} </h1>
            </div>

            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner