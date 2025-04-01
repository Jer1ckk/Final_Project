function Header() {
    return (
      <header>
        <h1 className="head-title">Canvas Chronicles</h1>
        <nav>
          <ul className="Nav_bar">
            
            <button className="custom-button" onClick={() => window.location.href = "/"}>Home</button>
        
        
            <button className="custom-button" onClick={() => window.location.href = "/Gallery"}>Gallery Page</button>
        
            <button className="custom-button" onClick={() => window.location.href = "/info"}>Artist Info</button>
        
            <button className="custom-button" onClick={() => window.location.href = "/about"}>About Page</button>

          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  