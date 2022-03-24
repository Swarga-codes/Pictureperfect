import Subimg from '../assets/unsplash_pVoEPpLw818.png';
import './Component.css'

const Subscribe = () => {
    return ( 
        <div classname='wrap_subscriber'  id='wrap'>
            <div className="subimg">
            <img src={Subimg} alt="" />
            </div>
            <div className="subcontent">
                <h1>Subscribe to us</h1>
                <p>Specially developed to help restore a more youthful <br /> appearance with improved radiance and bounce.</p>
                <div className="subemail">
                    <input type="text" placeholder="Your work email address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
     );
}
 
export default Subscribe;