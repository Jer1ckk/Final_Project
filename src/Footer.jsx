import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Museum Info */}
        <div className="museum-info">
          <h2>FRANS HALS MUSEUM</h2>
          <p>Groot Heiligland 62, Haarlem</p>
          <p>Dinsdag t/m zondag geopend van 11.00 - 17.00 uur</p>
          <h3>LOCATIE HAL</h3>
          <p>Grote Markt 16, Haarlem</p>
          <p>Tijdelijke tentoonstellingen met moderne en hedendaagse kunst</p>
        </div>

        {/* Navigation */}
        <div className="navigation">
          <h3>STEUN ONS</h3>
          <ul>
            <li><a href="#">NIEUWS</a></li>
            <li><a href="#">WERKEN BIJ</a></li>
            <li><a href="#">PERS</a></li>
            <li><a href="#">WEBSHOP</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter">
          <h3>BLIJF OP DE HOOGTE</h3>
          <p>Meld je aan voor onze nieuwsbrief</p>
          <input type="email" placeholder="voorbeeld@email.nl" />
          <button>AANMELDEN</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
