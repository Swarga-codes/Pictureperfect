import Arrowdown from '../assets/arrowdown.png';
import './Component.css'
const TopSellerContent = () => {
    return ( 
        <div className="top_seller">
        <h1>Top Sellers this &nbsp; <span>Month</span> <img src={Arrowdown} alt="" /> </h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br /> amet sint. Velit officia consequat duis enim minim mollit.</p>
    </div>
     );
}
 
export default TopSellerContent;