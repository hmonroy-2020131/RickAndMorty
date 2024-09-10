import { useEffect, useState } from "react"
import { reqCharacters } from "../services/characters"

export const useCharacters = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await reqCharacters(page)
            setCharacters(data.results)
            setTotalPages(data.info.pages)
        }

        fetchCharacters()
    }, [page])

    return {
        characters,
        page,
        totalPages,
        setPage
    }
}
