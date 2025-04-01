import React from "react";
import Art1 from "./Artist1.jpg";
import Art2 from "./Artist2.jpg";
import Art3 from "./Artist3.jpg";
import Art4 from "./Artist4.jpg";
import Art5 from "./Artist5.jpg";
import Art6 from "./Artist6.jpg";
import "./Artist_info.css";

const ImageWithText = ({ src, alt, title, text, reverse }) => {
  return (
    <div className={`content-container ${reverse ? "reverse" : ""}`}>
      <div className="text-section">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-section">
        <img src={src} alt={alt} className="image" />
      </div>
    </div>
  );
};

// Example Usage
function Artist_info() {
  return (
    <div className="page-container">
      <ImageWithText
        src=  {Art1}
        alt="Abstract Art"
        text="lived during the late 15th Century and early 16th Century in and around Italy. He was a painter, a scientist, an inventor, and an engineer. He is considered by historians to be a natural genius. Today he is best remembered for his art, especially the Mona Lisa and the Last Supper. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and palaeontology."
        title="Leonardo da Vinci"
        reverse={false} // Normal layout (Image right, text left)
      />
      <ImageWithText
        src={Art2}
        alt="Light Therapy"
        title="Vincent van Gogh"
        text="Vincent Van Gogh was born on 30 March 1853 in Zundert in the southern Netherlands, the son of a pastor. In 1869, he took his first job, working in the Hague branch of an international art dealing firm. He began to write to his younger brother Theo, a correspondence which continued for the rest of Van Gogh's life.He is now famed for the great vitality of his works which are characterised by expressive and emotive use of brilliant colour and energetic application of impastoed paint. "
        reverse={true} // Reverse layout (Image left, text right)
      />
      <ImageWithText
        src=  {Art3}
        alt="Abstract Art"
        text="Michelangelo di Lodovico Buonarroti Simoni, known mononymously as Michelangelo, was an Italian sculptor, painter, architect, and poet of the High Renaissance. Born in the Republic of Florence, his work was inspired by models from classical antiquity and had a lasting influence"
        title="Michelangelo"
        reverse={false} // Normal layout (Image right, text left)
      />
      <ImageWithText
        src={Art4}
        alt="Light Therapy"
        title="Sandro Botticelli"
        text="Alessandro di Mariano di Vanni Filipepi, better known as Sandro Botticelli or simply Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work."
        reverse={true} // Reverse layout (Image left, text right)
      />
      <ImageWithText
        src=  {Art5}
        alt="Abstract Art"
        text="Pablo Ruiz was born in Malaga on 25 October 1881, the son of an art teacher. He later adopted his mother's maiden name of Picasso. He grew up in Barcelona, showing artistic talent at an early age. In the early 1900s, he moved between France and Spain before finally settling in Paris in 1904."
        title="Pablo Picasso"
        reverse={false} // Normal layout (Image right, text left)
      />
      <ImageWithText
        src={Art6}
        alt="Light Therapy"
        title="Hokusai"
        text="(Japanese, 1760–1849) was a Japanese artist, ukiyo-e painter, and printmaker during the Edo period. Born to an artisan family in present-day Tokyo, he began painting at a young age, and became apprenticed to a wood-carver as a teenager."
        reverse={true} // Reverse layout (Image left, text right)
      />

    </div>
  );
}
export default Artist_info;

