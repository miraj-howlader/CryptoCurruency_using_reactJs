
import Logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import './navbar.css'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const {setCurrency} = useContext(CoinContext)

 const currencyHandeler = (e)=>{
    switch(e.target.value){
        case 'usd':{
            setCurrency({name:'usd', symbol:'$'});
            break;
        }
        case 'eur':{
            setCurrency({name:'eur', symbol:'€'});
            break;
        }
        case 'inr':{
            setCurrency({name:'inr', symbol:'₹'});
            break;
        }
        case 'bdt':{
            setCurrency({name:'bdt', symbol:'৳'});
            break;
        }
        default:{
            setCurrency({name:'usd', symbol:'$'});
            break;
        }
    }
 }

  return (
    <div className='navbar'>
        <Link to={'/'}><img src={Logo} alt="" className='logo'/></Link>
        <ul>
           <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className="navright">
            <select onChange={currencyHandeler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="bdt">BDT</option>
            </select>
            <button>Sign up
                <img src={arrow_icon } alt="" />
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
