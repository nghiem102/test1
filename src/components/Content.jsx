import React from 'react'
import logo from '../img/logoNCC 1.png'

const Content = () => {
  return (
    <div className='content'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="main-text">
            <h2>Lorem ipsum dolor sit asmet?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
    </div>
    
  )
}

export default Content