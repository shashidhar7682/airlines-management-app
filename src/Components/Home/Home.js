import React from 'react';
import './Home.css';
import video from '../../Assets/vid1.mp4';
import {GiAirplaneArrival,GiAirplaneDeparture} from 'react-icons/gi';
import {HiFilter} from 'react-icons/hi';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi';
import {BsListTask} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb'
 

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search Your Trip
          </h1>
        </div>
        <div className="cardDiv grid">
          <div className="departureInput">
            <label htmlFor="departureCity">Search your departure:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter departure here..." />
              <GiAirplaneDeparture className='icon'/>
            </div>
          </div>
          <div className="arrivalInput">
            <label htmlFor="arrivalCity">Search your arrival:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter arrival here..." />
              <GiAirplaneArrival className='icon'/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter date here..." />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$10000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="10000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <FiTwitter className='icon'/>
            <FiInstagram className='icon'/>
          </div>
          <div className="leftIcons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;