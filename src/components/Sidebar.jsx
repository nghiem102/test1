/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'

const Sidebar = () => {

    useEffect(() => {
        const allSideMenu = document.querySelectorAll('.Sidebar ul li a');

        allSideMenu.forEach(item=> {
            const li = item.parentElement;

            item.addEventListener('click', function () {
                allSideMenu.forEach(i=> {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });
    },[])
  return (
    <div className='Sidebar'>
        <ul>
            <li className='active'><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>New</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
  )
}

export default Sidebar