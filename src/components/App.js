import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from './Card'
import axios from 'axios'

const App = () => {
  const [results, setResults] = useState([])
  const onFetch = async (ip) => {
    const { data } = await axios.get(
      'https://geo.ipify.org/api/v1?apiKey=at_owNobvpTDZ7NiEPkeqKgcHL07rtvX&ipAddress=8.8.8.8',
      {
        params: {
          apiKey: 'at_owNobvpTDZ7NiEPkeqKgcHL07rtvX',
          ipAddress: ip,
        },
      },
    )
    setResults(data)
  }
  console.log(results)
  return (
    <div>
      <Header onFetch={onFetch} />
      <Card data={results} />
    </div>
  )
}
export default App
