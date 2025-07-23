/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

export default function AuthForm () {
    const[islogin, setIslogin] = useState(true)
  return (
    <div className='Container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={islogin ? `active`: ""} onClick={() => setIslogin(true)}>login</button>
                <button className={!islogin ? `active` : " " } onClick={() => setIslogin(false)}>signup</button>
            </div>
            {islogin ? <>
            <div className='form'>
                <h2>login Form</h2>
                <input type='email' placeholder='email' />
                <input  type='password' placeholder ='PassWord'/>
                <a href ="#">forgot password</a>
                <button>login</button>
                <p>Not a Member? <a href="#" onClick={()=> setIslogin(false)} > singup now</a></p>
            </div>
            </> : <>
            <div className='form'>
              <h2>signup Form</h2>
                <input type='email' placeholder='email' />
                <input  type='password' placeholder ='PassWord'/>
                <input  type='password' placeholder ='Cornfirm PassWord'/>
                <button>signup Form</button>
            </div>
            </>
            }
            
        </div>
    </div>
  )
}

