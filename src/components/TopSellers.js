import { row1 } from './data';
import { row2 } from './data';
import { row3 } from './data';
import { row4 } from './data';
import Topseller_img from '../assets/topseller_img.png';



const TopSellers = () => {
    return ( 
        <div className="topseller_box">
            <div className="topseller_col">{
             row1.map(data=>(
            <div className="topseller_container">
                <h4>{data.num}</h4>
                <img src={data.image} alt="" className='topsell_pic'/>
                <div>
                    <p>{data.name}</p>
                    <span><img src={Topseller_img} alt=""  />{data.price}</span>
                    <button className={data.class}>+468.48%</button> 
                </div>
                
              </div> 
              ))}

            </div>


            <div className="topseller_col">{
             row2.map(data=>(
            <div className="topseller_container">
                <h4>{data.num}</h4>
                <img src={data.image} alt="" className='topsell_pic'/>
                <div>
                    <p>{data.name}</p>
                    <span><img src={Topseller_img} alt=""  />{data.price}</span>
                    <button className={data.class}>+468.48%</button>  
                </div>
               
              </div> 
              ))}

            </div>

            <div className="topseller_col">{
             row3.map(data=>(
            <div className="topseller_container">
                <h4>{data.num}</h4>
                <img src={data.image} alt="" className='topsell_pic'/>
                <div>
                    <p>{data.name}</p>
                    <span><img src={Topseller_img} alt=""  />{data.price}</span>
                    <button className={data.class}>+468.48%</button>
                </div>
               
              </div> 
              ))}

            </div>

            <div className="topseller_col">{
             row4.map(data=>(
            <div className="topseller_container">
                <h4>{data.num}</h4>
                <img src={data.image} alt="" className='topsell_pic'/>
                <div>
                    <p>{data.name}</p>
                    <span><img src={Topseller_img} alt=""  />{data.price}</span>
                    <button className={data.class}>+468.48%</button>
                </div>
               
              </div> 
              ))}

            </div>


        </div>
     );
}
 
export default TopSellers;