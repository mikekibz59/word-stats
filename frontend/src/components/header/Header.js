import React from 'react'
import Form from '../form/Form'
import "./Header.css"

export default function Header(){
  return (
    <header className="hero">
      <div className="content">
        <div className="placeholder">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque, placeat in.</p>
          </div>
          <div>
            <Form/>
          </div>
        </div>
      </div>
    </header>
  )
}