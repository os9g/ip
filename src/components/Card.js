import React from 'react'

const Card = ({ data }) => {
  return (
    <div className="info">
      <div className="container">
        <div className="card grid">
          <div className="details">
            <h4>IP ADDRESS</h4>
            <h1>{data.ip}</h1>
          </div>
          <div className="details">
            <h4>LOCATION</h4>
            <h1>{`${data.location.city}, ${data.location.country}`}</h1>
          </div>
          <div className="details">
            <h4>TIMEZONE</h4>
            <h1>{data.location.timezone}</h1>
          </div>
          <div className="details">
            <h4>ISP</h4>
            <h1>{data.isp}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
