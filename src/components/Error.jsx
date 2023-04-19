import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const nav = useNavigate();
    return (
        <div className='image-error d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <div>
                <h1 className='animate-charcter' >The page not found 404</h1>
                <button style={{width:'15vh'}} className='btn btn-success' onClick={(e)=>{
                    nav(-1)
                }}>Back</button>
            </div>
        </div>
    )
}
