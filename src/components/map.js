import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ data, zoom, setZoom }) => {
  console.log(data.length !== 0)
  if (data.length !== 0) {
    return (
      <MapContainer
        className="mymap"
        center={[data.location.lat, data.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.location.lat, data.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  } else {
    return (
      <div className="map-notice">
        <h1 className="flex">Search for an IP address to see the loacation</h1>
      </div>
    )
  }
}
export default Map
