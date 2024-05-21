import React from 'react'

export const Edit = ({ movie, getMovies, setEdit, setMovies }) => {
    const componentTitle = "Editar Pelicula"

    const handleSubmit = (e, id) => {
        e.preventDefault()

        const { title, description } = e.target

        const moviesOnStorage = getMovies()
        const index = moviesOnStorage.findIndex(movie => movie.id === id)

        const editedMovie = {
            id,
            title: title.value,
            description: description.value
        }

        moviesOnStorage[index] = editedMovie

        localStorage.setItem('movies', JSON.stringify(moviesOnStorage))

        setMovies(moviesOnStorage)
        setEdit(0)
    }

    return (
        <div className='edit_form'>
            <h3 className="title"> {componentTitle}: {movie.title} </h3>
            <form onSubmit={(e) => handleSubmit(e, movie.id)}>
                <input type="text" name="title" className='editedTitle' defaultValue={movie.title} />
                <textarea name="description" className='editedDescription' defaultValue={movie.description} />

                <input type="submit" name="edit" className="editButton" value="Actualizar" />
            </form>
        </div>
    )

}
