import React from 'react';
import Logo from './images/logo.png'
export default function Header() {
  return (
    <header>
        <div className="container row">
            <img src={Logo} alt="Saasup logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Pages</a>
                <a href="#">Blog</a>
                <a href="#">Cart</a>
            </nav>
            <a href="#" className="btn btn-hover">Sign In</a>
        </div>
    </header>
  )
}