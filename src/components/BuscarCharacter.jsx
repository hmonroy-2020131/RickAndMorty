import { useState, useEffect } from "react"

export const BuscarCharacter = ({ handleGetCharacter, speciesOptions }) => {
    const [characterName, setCharacterName] = useState('')
    const [selectedSpecies, setSelectedSpecies] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleGetCharacter(characterName, selectedSpecies)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="card shadow-sm border-light p-4" style={{ width: '100%', maxWidth: '500px' }}>
                <h5 className="card-title text-center mb-4">Buscar Personaje</h5>
                <form className="d-flex flex-column" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Introduce el nombre del personaje"
                        onChange={(e) => setCharacterName(e.target.value)}
                        value={characterName}
                    />
                    <select
                        className="form-select mb-2"
                        value={selectedSpecies}
                        onChange={(e) => setSelectedSpecies(e.target.value)}
                    >
                        <option value="">Seleccionar especie</option>
                        {speciesOptions.map((species, index) => (
                            <option key={index} value={species}>{species}</option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-outline-dark">Buscar</button>
                </form>
            </div>
        </div>
    )
}
