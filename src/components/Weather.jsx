import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import './style.css'

export default function Weather() {

  const [data, setData] = useState([]);
  const { s } = useParams();
  const location = useLocation();

  let getData = async () => {
    let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${s ? s : 'givat zeev'}&APPID=64ecc4d196694c92aa27bd844611a03a&units=metric`)
    // console.log(data);
    console.log(12121);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [location])



  return (
    <div className='image-home text-white d-flex justify-content-center'>
     {data!=undefined&&
        <div className='box_shadow' style={{ paddingTop: '50px',borderRadius:'40px 40px 40px 40px' ,width:'70%' }}>
          <h1 style={{ fontSize: '50px' }}>The Weather in {data.name}<CiLocationOn style={{ fontSize: '55px' }} /></h1>
          <div >
            {data.weather ? <img style={{ lineHeight: '85px' }} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : null}
            <h3 style={{ lineHeight: '85px', fontSize: '50px', fontFamily: 'sans-serif' }}>{data.main?.temp.toFixed(0)}°</h3>
            {data.weather ? <h3 style={{ lineHeight: '85px',fontSize: '40px' }}>Condition: {data.weather[0].main}</h3> : null}
            <h3 style={{ lineHeight: '85px', fontSize: '40px' }}>Day:{data.main?.temp_max.toFixed(0)}° ,Night:{data.main?.temp_min.toFixed(0)}°</h3>
            <h3 style={{ lineHeight: '85px', fontSize: '35px' }}>Wind: {data.wind?.speed.toFixed(0)} Kmh</h3>
          </div>
        </div>
        }
    </div>
  )
}
