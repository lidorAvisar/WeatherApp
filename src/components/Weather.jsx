import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

export default function Weather() {

  const [data, setData] = useState([]);
  const { s } = useParams();
  const location = useLocation();

  const getData = async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${s ? s : 'givat zeev'}&APPID=64ecc4d196694c92aa27bd844611a03a&units=metric`)
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [location])



  return (
    <div>
      <div style={{ marginTop: '45px' }}>
        <h1>The Weather in {data.name} is:</h1>
        <div>
          {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
          <h3>{data.weather[0].main}</h3> */}
          <h3>{data.main?.temp}C°</h3>
          <h3>Day:{data.main?.temp_max}C° ,Night:{data.main?.temp_min}C°</h3>
          <h3>Wind:{data.wind?.speed}</h3>
        </div>
      </div>
    </div>
  )
}
