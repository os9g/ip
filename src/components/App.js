import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from './Card'
import Map from './map'
import axios from 'axios'

const App = () => {
  const [results, setResults] = useState([])
  const [zoom, setZoom] = useState(3)
  const onFetch = async (ip) => {
    setZoom(13)
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
      <Map data={results} zoom={zoom} setZoom={setZoom} />
    </div>
  )
}
export default App
