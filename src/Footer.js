import React from 'react'
import './App.css'
const year = new Date();
const Footer = () => {
  return (
    <div className="footer">
      <h4>copyright &copy; {year.getFullYear()}</h4>
    </div>
  )
}

export default Footer