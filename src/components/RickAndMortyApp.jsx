import React, { useState, useEffect } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { BuscarCharacter } from './BuscarCharacter'
import { ContenedorCharacters } from './ContenedorCharacters'

export const RickAndMortyApp = () => {
    const { characters, page, totalPages, setPage } = useCharacters()
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const [speciesOptions, setSpeciesOptions] = useState([])

    useEffect(() => {
        if (characters.length > 0) {
            const speciesSet = new Set(characters.map(char => char.species))
            setSpeciesOptions(Array.from(speciesSet))
        }
    }, [characters])

    const handleGetCharacter = (characterName, selectedSpecies) => {
        let results = characters

        if (characterName) {
            results = results.filter(char =>
                char.name.toLowerCase().includes(characterName.toLowerCase())
            )
        }

        if (selectedSpecies) {
            results = results.filter(char =>
                char.species === selectedSpecies
            )
        }

        setFilteredCharacters(results)
    }

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage)
        }
    }

    const displayCharacters = filteredCharacters.length > 0 ? filteredCharacters : characters

    return (
        <>
            <BuscarCharacter handleGetCharacter={handleGetCharacter} speciesOptions={speciesOptions} />
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {displayCharacters.map((char) => (
                        <ContenedorCharacters key={char.id} character={char} />
                    ))}
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page <= 1}
                    >
                        Anterior
                    </button>
                    <span>Page {page} of {totalPages}</span>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page >= totalPages}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    )
}
