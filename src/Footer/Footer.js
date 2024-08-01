import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <div>
                <div class="container">
                    <footer class="py-3 my-4">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                            <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                            <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">About Us</Link></li>
                            <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Contact Us</Link></li>
                        </ul>
                        <p class="text-center text-muted">© 2024 Company, Inc</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer