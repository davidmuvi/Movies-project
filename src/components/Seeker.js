import React, { useState } from 'react'

export const Seeker = ({ movies, setMovies }) => {

    const [search, setSearch] = useState('')
    const [notFind, setNotFind] = useState(false)

    const searchMovie = (e) => {
        setSearch(e.target.value)

        let filteredMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase())
        })

        if (search.length > 1 || filteredMovies.length <= 0) {
            filteredMovies = JSON.parse(localStorage.getItem("movies"))
            setNotFind(true)
        } else {
            setNotFind(false)
        }

        setMovies(filteredMovies)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {search}</h3>
            {(notFind && search.length > 1) && <span className='not-find'>No ha habido resultados</span>}
            <form onSubmit={handleSubmit}>
                <input type="text"
                    id="search_field"
                    name="search"
                    autoComplete="off"
                    value={search}
                    onChange={searchMovie}
                />

                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
