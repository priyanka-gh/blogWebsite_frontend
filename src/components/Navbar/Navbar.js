import React,{useEffect, useState} from 'react'
import './Navbar.css'
import {signout,isAuthenticated} from '../index'
import {Link, useHistory } from 'react-router-dom'

const Homepage = () => {
    const history=useHistory()

    const [loggedIn,setLoggedIn]=useState(false);

    useEffect(() => {
        isAuthenticated()?setLoggedIn(true):setLoggedIn(false)
    },[])
    return (
        <div>
            <div className="top">
                <div className="nav">
                    <a className='ecrire' href="/">écrire</a>
                    <div className="insideNav">
                        {!loggedIn && (
                        <Link to='/login' className="link">Login</Link>
                            )}
                            {!loggedIn && (
                                <Link to='/signup' className="link">Signup</Link>
                            )}
                            {loggedIn && (
                                <Link to='/myAllBlogs' className="link">My Work</Link>
                            )}
                            {loggedIn && (
                                <Link to='/'  
                                className="link"
                                onClick={()=>{
                                    signout(()=>{
                                        history.push("/")
                                        window.location.reload();

                                    });
                                }}>
                                Signout</Link>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
