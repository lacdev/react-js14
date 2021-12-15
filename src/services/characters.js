import { RICK_AND_MORTY_API } from '../utils/constants'

const CHARACTERS_API = 'character'

const getCharacters = async () => {
  try {
    const response = await fetch(`${RICK_AND_MORTY_API}${CHARACTERS_API}`)

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export { getCharacters }
