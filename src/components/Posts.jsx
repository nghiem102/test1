import React from 'react'
import posts from '../data/Post'

const Posts = () => {
  return (
    <div className='Posts'>
        {
            posts.map((item,index) =>
                <div className='posts-item' key={index}>
                    <h2>{item.title}</h2>
                   <p> <img src={item.img} alt="" />{item.desc}</p>
                    
                </div>
             )
        }
    </div>
  )
}

export default Posts