import Footer from "./Footer";
import Header from "./Header";
import CardAboutUs from "./CardAboutUs";

function About() {
  return (
    <>
      <Header />
      <h1 className="about_us">About Our Website</h1>
      <div className="section2">
        <div className="left">
            <h1>Explore the World of Oil Painting</h1>
            <p>Our painting blog is a hub for artists, enthusiasts, and collectors to discover and appreciate the beauty of oil painting.
            We provide in-depth articles, tutorials, and galleries featuring stunning artworks. Each painting includes detailed insights
            about its artist, creation date, and artistic techniques, allowing visitors to learn and be inspired.
            </p>
        </div>
        <div className="right">
            <h1>Join Our Creative Community</h1>
            <p>Beyond just viewing art, our platform encourages discussion and interaction among art lovers. Share your thoughts, engage
            with fellow artists, and explore the stories behind every masterpiece. Whether you're an aspiring painter or an admirer of fine
            art, our blog is the perfect place to deepen your passion for oil painting.
            </p>
        </div>
      </div>
        <h1 className="about_us">Meet Our Team</h1>
        <CardAboutUs />
      <Footer />
    </>
  );
}

export default About;
