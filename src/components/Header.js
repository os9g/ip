import React, { useState } from 'react'
import background from '../images/pattern-bg.png'

const Header = ({ onFetch }) => {
  const [ip, setIp] = useState('')
  const [alert, setAlert] = useState('Search for any IP address')
  const [valid, setValid] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    const ValidateIPaddress = (ipaddress) => {
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          ipaddress,
        )
      ) {
        setValid('')
        onFetch(ip)
      } else {
        setValid('Please Enter a Valid IP Address')
      }
    }
    ValidateIPaddress(ip)
  }

  return (
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <h1 className="flex">IP Address Tracker</h1>
        <form className="flex">
          <div className="input">
            <div className="flex">
              <input
                onChange={(e) => {
                  setIp(e.target.value)
                }}
                type="text"
                placeholder={alert}
              />
              <button
                onClick={(e) => {
                  if (ip === '') {
                    setAlert('Please Enter The IP Address')
                    e.preventDefault()
                  } else {
                    onFormSubmit(e)
                  }
                }}
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </form>
        <p className="flex">{valid}</p>
      </div>
    </div>
  )
}
export default Header
