import logo from './logo.svg';
import './App.css';
import{Search,MapPin,Wind} from 'react-feather'
import getWeather from './api/api'
import { useState } from 'react';
function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className='input-wrapper'>
        <input type='text'/>
        
          <button>
          <search> 

          </search>  
            
          </button>
       
      </div>
      <div className='content'>
      <div className='location'>
        <MapPin></MapPin>
        <h2>London <span>(GB)</span></h2>
        <p className='datetext'> 2 october 2023</p>

        <div className='weatherdesc'>
          <img src="" alt=''/>
          <h3>clear sky</h3>
        </div>

        <div className='tempstats d-flex flex-c'>
          <h1>43<span>&deg;C </span></h1>
        </div>
        <div className='windstats d-flex '>

        </div>
        

        </div>


      </div>
      <div className='content'></div>
      
    </div>
  );
}

export default App;
