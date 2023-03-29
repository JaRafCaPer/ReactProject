import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './navbar.css'

export const NavBar = () => {
  return (
    <div className='menu'>
    <h1>Alterego:Gremio de Rol</h1>
    <a className="nav-link active text-white" aria-current="page" href="...">Inicio</a>
    <a className="nav-link active text-white" aria-current="page" href="...">Productos</a>
    <a className="nav-link active text-white" aria-current="page" href="...">Ayuda</a>
    <CartWidget/>
    </div>
  )
}
