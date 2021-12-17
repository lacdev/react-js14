import { BASE_URL } from '../utils/constants'

const USERS_PATH = 'users.json'

const createUser = async (data) => {
  const response = await fetch(`${BASE_URL}${USERS_PATH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await response.json
}

const updateUser = async (data) => {
  const response = await fetch(`${BASE_URL}${USERS_PATH}`, {
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json
}

const getUsers = async () => {
  const response = await fetch(`${BASE_URL}${USERS_PATH}`)
  return response.json()
}

const convertToArray = (firebaseObject) =>
  Object.keys(firebaseObject).map((key) => ({
    id: key,
    data: firebaseObject[key],
  }))

export { createUser, getUsers, convertToArray, updateUser }
