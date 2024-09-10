const api_url = 'https://rickandmortyapi.com/api/character'

export const reqCharacters = async (page = 1) => {
    const resp = await fetch(`${api_url}?page=${page}`)
    return resp.json()
}
