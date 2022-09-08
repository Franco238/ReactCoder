import { Component } from "react";
import {Link} from 'react-router-dom'
import CartWidget from "./CartWidget";


const Navbar = () => {

return(
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <Link class="navbar-brand" to="/"><img className="logoNavbar" src="https://www.afashop.com.ar/file/v1718866347105074650/general/logo_afa.png"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/productos/camisetas">Qatar 2022</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/productos/camperas">Camperas</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/productos/buzos">Buzos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/historia">Historia</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contacto">Contacto</Link>
        </li>
        
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
);
}

export default Navbar

