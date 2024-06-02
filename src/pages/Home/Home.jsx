import React, { useContext, useEffect, useState } from 'react'

import './home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';
const Home = () => {
  const {allCoin, currency}= useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input,setInput] = useState('')


  const inputHandler = (e) => {
    setInput(e.target.value)
    if(e.target.value===''){
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (e) => {
    e.preventDefault()
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLocaleLowerCase())
    })
    setDisplayCoin(coins)
  }

  useEffect(()=>{
     setDisplayCoin(allCoin)
  },[allCoin])
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
         <p>Welcome to the world's largest crytocurrency marketplace. Sign   up to explore more aboutn cryptos.</p>
          <form onSubmit={searchHandler}>
            <input 
            onChange={inputHandler}
            value={input}
            required
            list='coinlist'
             type="text" placeholder='Search crypto..'/>


             <datalist id='coinlist'>
                {allCoin.map((item,index)=>(
                  <option key={index} value={item.name}/>
                ))}
             </datalist>
            <button type='submit'>Submit</button>
          </form>

      </div>

      <div className="cryto-table">
        <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:'center'}}>24H Change</p>
            <p className='marketCap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0,10).map((item,index)=>(
            <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name +" - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0 ?"green":"red"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}</p>
               <p className='marketCap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>  

            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
