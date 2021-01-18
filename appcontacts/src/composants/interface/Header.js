import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0 ">
                <div className="container">
                    <Link to="/" className="navbar-brand">AppContacts</Link>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/list" className="nav-link">Acceuil</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/ajouter" className="nav-link">Ajouter</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/apropos" className="nav-link">À Propos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
