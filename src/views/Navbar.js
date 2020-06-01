import React from 'react'
import { Link } from '@reach/router'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h2 style={{color: "blue"}}>Product Manager</h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new">Add</Link>
            </li>
        </ul>
        </nav>
    )

}


export default Navbar