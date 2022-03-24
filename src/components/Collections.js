import Img1 from '../assets/img3.png';
import Img2 from '../assets/img.png';
import Img3 from '../assets/img2.png';


const Collections = () => {
    return ( 
        <div className="collections">
            <h1>Want to List your Collection</h1>
            <div className="collections_data">
                <div className="collections_img">
                    <div>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    </div>
                    <img src={Img3} alt="" className='collec_img'/>
                </div>
                <div className="collections_content">
                    <h2>List and sell your NFTs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi ac phasellus placerat a pellentesque tellus sed <br /> egestas. Et tristique dictum sit tristique sed non. <br /> Lacinia lorem id consectetur pretium diam ut. <br /> Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
     );
}
 
export default Collections;