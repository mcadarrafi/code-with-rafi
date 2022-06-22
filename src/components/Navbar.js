import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar(props) {
    let bgMode = props.mode === 'light' ? 'light' : 'dark';
    let txtMode = props.mode === 'light' ? 'dark' : 'light';
    return (
        <>
            
                <nav className={`navbar navbar-expand-lg bg-${bgMode} navbar-${bgMode} navbar-inverse`}>
                    <div className={`container-fluid text-${txtMode}`}>
                        <Link className="navbar-brand " to="/">TextUtils</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="index.htmlnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                                {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}

                            </ul>
                            <div class="d-flex form-check form-switch mx-5">
                                <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                                <label class={`form-check-label text-${txtMode} mx-1`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
                            </div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
           
        </>
    )
}

export default Navbar