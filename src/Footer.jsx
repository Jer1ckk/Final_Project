import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Museum Info */}
        <div className="museum-info">
          <h2>ABOUT US</h2>
          <p>Canvas Chrnicles is a space dedicated to art lovers, </p>
          <p>featuring timeless paintings, artist stories, and creative inspirations.</p>
          <h2>OUR MISSION</h2>
          <p>To bring the beauty of paintings closer to everyone by sharing insights, history, and techniques behind famous artworks.</p>
        </div>

        {/* Navigation */}
        <div className="navigation">
          <h3>CONNECT WITH US</h3>
          <p>FOLLOW US on social media for the latest updates.</p>
          <p>JOIN OUR COMMUNITY and share your passion for painting.</p>
          <p>CONTACT US for collaborations and inquiries.</p>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter">
          <h2>Login</h2>
          <p>Be part of our community.</p>
          <input type="email" placeholder="voorbeeld@email.nl" />
          <button>Sign up</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
