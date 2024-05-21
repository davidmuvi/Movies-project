import React, { useEffect, useState } from 'react'
import { Edit } from './Edit'

export const List = ({ movies, setMovies }) => {

    const [edit, setEdit] = useState(0)

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem("movies"))

        setMovies(movies)
        return movies
    }

    const deleteMovie = (id) => {
        const moviesOnStorage = JSON.parse(localStorage.getItem("movies"))

        const newMovies = moviesOnStorage.filter(movie => movie.id !== parseInt(id))

        setMovies(newMovies)

        localStorage.setItem("movies", JSON.stringify(newMovies))
    }

    if (!movies) {
        return <h2>No hay peliculas</h2>
    } else {
        return (
            <>
                {movies.map(movie => {
                    return (
                        <article key={movie.id} className='peli-item'>
                            <h3 className='title'>{movie.title}</h3>
                            <p className='description'>{movie.description}</p>

                            <button className="edit" onClick={() => { setEdit(movie.id) }}> Editar </button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}> Borrar </button>

                            {/* Formulario de editar */}
                            {edit === movie.id && (
                                <Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setMovies={setMovies} />
                            )}
                        </article>
                    )
                })}
            </>
        )
    }

}
