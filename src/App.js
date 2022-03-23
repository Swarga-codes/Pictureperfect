import logo from './logo.svg';
import './App.css';
import Arrow from './assets/arrow.png'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';
import TopNFT from './components/TopNFT';
import './components/components.css'
import SassyChar from './assets/SassyChar.png'
import SatisfyingChar from './assets/SatisfyingChar.png'
import ApolloChar from './assets/ApolloChar.png'
import Apollo from './assets/apollo.png'
import Sassy from './assets/sassy.png'
import Satisfying from './assets/sastisfying.png'
function App() {
  return (
  <main>
  <Navbar/>
  <Header/>
  <div className="NFT_Head">
        <div className='left_head'>
        <p>Top NFT’s now</p>
        </div>
        <div className='right_head'>
        <div>
        <p> View all</p>
        </div>
        <div>
   <img src={Arrow} alt="" />
   </div>
        </div>
        </div>
        <div className="NFTLoop">
  <TopNFT title = 'Apollo Eth #1289 NFT' hours = '18' mins = '25' secs = '44' image = {ApolloChar} banner =  {Apollo}/>
  <TopNFT title = 'Sassy Bull #1169 Art' hours = '09' mins = '15' secs = '23' image = {SassyChar} banner = {Sassy}/>
  <TopNFT title = 'Satisfying 3D Art' hours = '23' mins = '32' secs = '56' image = {SatisfyingChar} banner = {Satisfying}/>
  </div>
  <Ecosystem/>
  </main>
  );
}

export default App;
