import Img1 from '../assets/insta.png';
import Img2 from '../assets/ball.png';
import Img3 from '../assets/twitter.png';
import Img4 from '../assets/social.png';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
            <div className="heading">
                <h1 id="footer_cont"> Perfect <br />Picture</h1>
                <p>Lorem ipsum dolor amet, <br /> consectetur adipiscing elit. Eget <br /> nisl nunc quam ac sed turpis <br /> volutpat. Cursus sed massa non <br /> nisi, placerat.</p>
                <div className="foot_img">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                    <img src={Img4} alt="" />
                </div>
            </div>
            <div className="heading">
                <h1>Market place</h1>
                <ul>
                    <li>Overview</li>
                    <li>Features <span>new</span> </li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                </ul>
            </div>

            <div className="heading">
                <h1>Collectibles</h1>
                <ul>
                    <li>About</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Contact</li>
                    <li>Partners</li>
                </ul>
            </div>

            <div className="heading">
                <h1>Support</h1>
                <ul>
                    <li>Help Center</li>
                    <li>Safety Center</li>
                    <li>Legal</li>
                    <li>Privacy Policy</li>
                    <li>Status</li>
                </ul>
            </div>

            <div className="heading">
                <h1>Legal</h1>
                <ul>
                    <li>Cookies Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Law Enforcement</li>
                    <li>Status</li>
                </ul>
            </div>

            <div className="heading"  style={{padding: '0.4rem'}}>
                <h1>Follow us</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Dribbble</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            </div>

            <div className="footer_last">
                <p>© 2022 Perfect Picture . All rights reserved</p>
                <p style={{marginLeft:"auto"}}>Terms & Conditions | Privacy Policy | Sitemap</p>
            </div>

        </footer>
     );
}
 
export default Footer;
