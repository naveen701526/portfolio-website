import React from 'react'
import { Icon } from '@iconify/react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Icon icon='mdi:quora' />
        <Icon icon='simple-icons:medium' />
        <Icon icon='akar-icons:github-fill' />
        <Icon icon='bi:linkedin' />
      </div>
      <p>&copy; 2023 naveen-metta.netlify.com</p>
    </div>
  )
}

export default Footer
