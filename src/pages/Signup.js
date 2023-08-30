import React from 'react'
import Header from '../components/Header'
import SignUpSignIn from '../components/SignUpSignIn'

function Signup() {
  return (
    <div>
      <Header/>
      <div className='wrapper'>
        <SignUpSignIn/>
      </div>
    </div>
  )
}

export default Signup