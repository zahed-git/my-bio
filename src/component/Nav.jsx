
import { NavLink } from "react-router-dom";
import img from '../assets/letter-z.png'



const Nav = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allspots'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addspot'>Add Spots</NavLink></li>
        <li><NavLink to='/mylist'>My List</NavLink></li>
        <li><NavLink to='/user'>User Profile</NavLink></li>
        <li><NavLink to='/usersettings'>User Settings</NavLink></li>
    </>




    return (
        <div className="navbar mx-auto bg-base-100 fixed z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><span className="text-red-500">Md.</span>Zahed</a>
            </div>
           
            <div className="navbar hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>

            </div>
        </div>
    )
}

export default Nav;