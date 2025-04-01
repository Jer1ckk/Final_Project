import Footer from "./Footer";
import Header from "./Header";
import CardAboutUs from "./CardAboutUs";

function About() {
  return (
    <>
      <h1 className="about_us">About Our Website</h1>
      <div className="section2">
        <div className="left">
            <h1 className="leftSide">Explore the World of Oil Painting</h1>
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
      <div className="about_us2">
        <p>Art is more than just colors on a canvas—it is a reflection of emotions, 
history, and the human experience. It tells stories, evokes feelings, and 
connects people across cultures and generations. Every brushstroke carries 
intention, whether it’s an expression of joy, sorrow, or a deeper message waiting to be discovered.
For us, art is a language without words. It inspires creativity, sparks imagination, 
and allows us to see the world through different perspectives. Through our painting 
blog, we celebrate the power of art, offering a space where passion and creativity come to life.</p>
      </div>
    </>
  );
}

export default About;
