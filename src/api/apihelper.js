const getBookData = async (text) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${text}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  )
  const result = await response.json()
  return result
}

export default getBookData
