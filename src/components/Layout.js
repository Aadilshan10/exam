import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WELCOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/">Home </Link>
        </li>

        <li class="nav-item">
        <Link to="/Aboutus">Aboutus</Link>
        </li>
        <li class="nav-item">
        <Link to="/Destinations">Destinations</Link>
        </li>
        
    
        
      </ul>
      <form class="d-flex" role="search">
        
       
        
        
        
        
      </form>
    </div>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;