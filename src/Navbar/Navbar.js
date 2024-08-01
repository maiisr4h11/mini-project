import React from 'react'
import { Link } from 'react-router-dom'
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';

function Navbar() {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="/"><Face2OutlinedIcon color="primary"/>My Website</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/ToDo">To Do App</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/ContactUs">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar