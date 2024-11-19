import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';

const Nav=()=>{
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return(
     
        <nav className="bg-violet-500 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="text-white font-bold text-lg">Logo</div>
       
        <ul className="flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-violet-200">Home</Link></li>
          <li><Link to="/classroom" className="hover:text-violet-200">Classroom</Link></li>
          <li><Link to="/timetable" className="hover:text-violet-200">Timetable</Link></li>
          <li><Link to="/notes" className="hover:text-violet-200">Notes</Link></li>
          
        </ul>

        <ul className="flex space-x-6 text-white">
          {isAuthenticated &&<li><p>{user.name}</p></li>}

        {isAuthenticated?( <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}></button> ) : <button onClick={() => loginWithRedirect()}>Log In</button> }
        
      
        <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
          
        </ul>

      </div>
    </nav>
   
    )
}

export default Nav;