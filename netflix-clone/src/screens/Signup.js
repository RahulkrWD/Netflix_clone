import React from 'react'
import NetflixLogo from '../components/NetflixLogo'
import styles from "../styleSheet/Signup.module.css"

function Signup() {
  return (
    <>
     <div className={styles.header}>
        <nav className={`navbar ${styles.navbar}`}>
          <NetflixLogo />
         
        </nav>
       
      </div>
      
    </>
  )
}

export default Signup
