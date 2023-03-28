const getBookData = async (text) => {

  //send a request to google books api with search text param
  //and returns respons json format
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
