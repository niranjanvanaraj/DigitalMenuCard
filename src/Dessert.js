import React,{useState} from 'react'
import './Dessert.css'

function Dessert() {
  const dessert=
[
    {
      id: 8,
      name: "Black Currant Ice Cream",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      description: "Creamy black currant ice cream with a fruity flavor.",
      price: 90
    },
    {
      id: 9,
      name: "Cheesecake",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
      description: "Smooth, creamy cheesecake with a buttery biscuit base.",
      price: 160
    },
    {
      id: 10,
      name: "Brownie",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
      description: "Rich, moist chocolate brownie with a fudgy texture.",
      price: 110
    }
  ]
   

  return (
    <div className="dessert-container">
      <h2>Desserts</h2>
      <div className="dessert-list">
        {dessert.map(({ id, name, image, description, price }) => (
          <div key={id} className="dessert-card">
            <img src={image} alt={name} className="dessert-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>₹{price}</h4>
          </div>
        ))}
      </div>
    </div>
  )

}
export default Dessert
