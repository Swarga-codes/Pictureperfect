import Logo from '../assets/logo.png'
import './components.css'
import User from '../assets/user.png'
const Navbar = () => {
    return (
        <>
        <div className="Navbar">
        <div className="logo">
        <div>
        <img src={Logo} alt="" />
        </div>
        <div>
        <p>Picture Perfect</p>
        </div>
        </div>
        <div className="routes">
        <li>Market</li>
        <li>Features</li>
        <li>Community</li>
        </div>
<div className="connect">
<img src={User} alt="" />
<button className='conBtn'>Connect Wallet</button>
</div>

        </div>
      
       </>
      );
}
 
export default Navbar;