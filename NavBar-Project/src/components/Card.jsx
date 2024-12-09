import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card