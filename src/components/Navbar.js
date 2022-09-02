import { Component } from "react";


const Navbar = ( {children} ) => {

return(
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#"><img className="logoNavbar" src="https://www.afashop.com.ar/file/v1718866347105074650/general/logo_afa.png"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Qatar 2022</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nuestra historia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Donde estamos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Todos</a></li>
            <li><a class="dropdown-item" href="#">Productos destacados</a></li>
            <li><a class="dropdown-item" href="#">Mundial Qatar 2022</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  {children}
</nav>
);
}

export default Navbar

