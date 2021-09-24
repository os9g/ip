import React from 'react'
import background from '../images/pattern-bg.png'

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <h1 className="flex">IP Address Tracker</h1>
        <form className="flex">
          <div className="input">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for any IP address or domain"
              />
              <button>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Header
