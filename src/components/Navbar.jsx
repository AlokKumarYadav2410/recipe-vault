import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeClass = 'bg-gray-900 px-4 py-2 rounded-lg text-white transition-all duration-300'
    const notActiveClass = 'text-white px-4 py-2 hover:text-gray-400 transition-all duration-300'

    return (
        <div className='flex flex-wrap justify-center gap-x-10 text-lg mb-5 items-center' >
            <NavLink to='/' className={({ isActive }) => isActive ? activeClass : notActiveClass}>Home</NavLink>
            <NavLink to='/recipes' className={({ isActive }) => isActive ? activeClass : notActiveClass}>Recipes</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? activeClass : notActiveClass}>About</NavLink>
            <NavLink to='/create-recipe' className={({ isActive }) => isActive ? activeClass : notActiveClass}>Create Recipe</NavLink>

        </div>
    )
}

export default Navbar
