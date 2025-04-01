import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <h1 className="head-title">Canvas Chronicles</h1>
        <nav>
          <ul className="Nav_bar">
            
            <Link to="/"><button className="custom-button">Home</button></Link>
            <Link to="/Gallery"><button className="custom-button">Gallery Page</button></Link>
            <Link to="/info"><button className="custom-button">Artist Info</button></Link>
            <Link to="/about"><button className="custom-button">About Page</button></Link>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  