import React from 'react'
import { SaveOnStorage } from '../helpers/SaveOnStorage'

export const Add = ({ setMovies }) => {

    const title = "Añadir pelicula"

    const handleSubmit = (e) => {
        e.preventDefault()
        const { title, description } = e.target

        let newMovie = {
            id: new Date().getTime(),
            title: title.value,
            description: description.value
        }

        setMovies(items => {
            if (Array.isArray(items)) {
                return [
                    newMovie,
                    ...items
                ]
            } else {
                setMovies(newMovie)
            }

            SaveOnStorage("movies", newMovie)

        }

    return (
            <div className="add">
                <h3 className="title">{title}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="title" name="title" placeholder="Titulo" />
                    <textarea id="description" name="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
        )
    }
