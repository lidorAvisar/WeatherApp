import React, { useRef } from 'react'
import { FcSearch } from 'react-icons/fc';
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const inputData = useRef();
  const nav = useNavigate();


  return (
    <div>
      <div className='nav-bar-color' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', margin: '0px', height: '80px' }}>
        <input ref={inputData}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              nav(`/search/${inputData.current.value}`)
            }
          }}
          style={{ height: '40px', borderRadius: '10px 0px 0px 10px', border: 'none', paddingLeft: '10px' }} type="search" placeholder='Search any location . . .' />
        <button onClick={(e)=>{
            nav(`/search/${inputData.current.value}`)
          }} className='bg-success' style={{ height: '40px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0px 10px 10px 0px', border: 'none' }}><span style={{ fontSize: '30px', display: 'flex' }}><FcSearch /></span></button>
      </div>
    </div>
  )
}
