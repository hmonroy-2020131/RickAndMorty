import React from "react"

export const ContenedorCharacters = ({ character }) => {
    return (
        <div className="col d-flex align-items-stretch">
            <div className="card w-100 h-100">
                <img
                    className="card-img-top"
                    src={character.image}
                    alt={character.name}
                    style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{character.name}</h5>
                </div>
            </div>
        </div>
    )
}
