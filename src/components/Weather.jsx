import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';

export default function Weather() {

  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const { s } = useParams();
  const location = useLocation();

  let getData = async () => {
    let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${s ? s : 'givat zeev'}&APPID=64ecc4d196694c92aa27bd844611a03a&units=metric`)
    // console.log(data);
    console.log(12121);
    setData(data);
    setEmpty(data ? false : true)
  }

  useEffect(() => {
    getData();
  }, [location])



  return (
    <div className='image-home'>
      {empty ? <div style={{ height: '400px' }}> <h1 className='text-white text-center pt-5'>no results. . .</h1></div> :
        <div style={{ paddingTop: '50px' }}>
          <h1 style={{ fontSize: '50px' }}>The Weather in {data.name}<CiLocationOn style={{ fontSize: '55px' }} /></h1>
          <div >
            {data.weather ? <img style={{ lineHeight: '45px' }} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : null}
            {data.weather ? <h3 style={{ lineHeight: '45px' }}>{data.weather[0].main}</h3> : null}
            <h3 style={{ lineHeight: '45px', fontSize: '50px', fontFamily: 'sans-serif' }}>{data.main?.temp.toFixed(0)}°</h3>
            <h3 style={{ lineHeight: '45px', fontSize: '40px' }}>Day:{data.main?.temp_max.toFixed(0)}° ,Night:{data.main?.temp_min.toFixed(0)}°</h3>
            <h3 style={{ lineHeight: '45px', fontSize: '35px' }}>Wind: {data.wind?.speed.toFixed(0)} Kmh</h3>
          </div>
        </div>
      }
    </div>
  )
}
