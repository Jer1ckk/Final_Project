import Header from "./Header";
import Footer from "./Footer";
import logo from './bigImage2.jpg'
import CardDisplay from "./CardDisplay";
import ImageGallery from "./ImageGallery";
import QuoteSection from "./QuoteSection";
import './index.css';


function Gallery_Page() {
    return (
        <>
            <Header />
            <div className="middle">
                <img src={logo} alt="" className="pic3" />
                <h1 className="most"> Most Famouse masterpieces </h1>
            </div>
            <CardDisplay />
            <QuoteSection />
            <ImageGallery />
            <Footer />
        </>
    );

}
export default Gallery_Page;
