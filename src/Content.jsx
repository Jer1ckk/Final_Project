import logo from './assets/Header_img.png'
import CardContent from './CardContent';

function Content() {
    return (
        <div class="relative ...">
            <img src={logo} alt="" className="pic" />
            <h1 class="opening-title">Every painting is a voyage into a sacred harbour.</h1>
            <div class="section2">
                <img src="img_sec2.png" alt="" />
                <div class="text_sec2">
                    <h1>Introduction to Oil Painting </h1>
                    <p> Oil painting is one of the most celebrated and enduring art forms in history. Developed in the early Renaissance, this technique uses pigments mixed with oil—typically linseed oil—to create rich, vibrant colors and intricate details. Unlike other mediums, oil paint dries slowly, allowing artists to blend colors seamlessly and achieve depth and texture. From the delicate brushstrokes of Leonardo da Vinci’s Mona Lisa to the bold, expressive swirls of Van Gogh’s Starry Night, oil painting has shaped the world of art for centuries. Its ability to capture light, emotion, and realism makes it a timeless and influential medium in the art world.</p>
                </div>
            </div>
            <CardContent />
            <img src={logo} alt="" className='pic' />
        </div>

    )
}

export default Content;
