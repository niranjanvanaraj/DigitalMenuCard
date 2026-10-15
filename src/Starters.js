import React, { useState } from 'react'
export default function Starters() {
    const starter = [
        {
            "id": 1,
            "name": "French Fries",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR973QJXLGgUv0WMDVut9Atl6dkgJgYQmwZborEOVAHoftSoa1s9HXBNizT&s=10",
            "description": "Crispy golden potato fries served with tomato ketchup.",
            "price": 99
        },
        {
            "id": 2,
            "name": "Spring Roll",
            "image": "https://media.istockphoto.com/id/486940812/photo/baked-spring-rolls-with-deep-vegetables-and-rice.jpg?s=612x612&w=0&k=20&c=rQ5NCxvLHt8zhO3oXFCU8QCfoVG_94jKTMWjti05Bso=",
            "description": "Crispy rolls filled with fresh vegetables and spices.",
            "price": 120
        },
        {
            "id": 3,
            "name": "Stuffed Mushrooms",
            "image": "https://i0.wp.com/theeuropeandish.com/wp-content/uploads/2025/06/IMG_1035-compressed.jpeg?w=1008&ssl=1",
            "description": "Fresh mushrooms stuffed with cheese, herbs, and spices.",
            "price": 180
        }]
    return (
        <div>
            <>
            {starter.map((i)=>{
                return(
                    <>
                    <h1>welcom</h1>
                    <img src={i.image} />
                    <h1>{i.id}</h1>
                    <p>{i.name}</p>
                    <p>{i.description}</p>
                    <h1>{i.price}</h1>
                    </>
                )
            })}
            </>
        </div>
    )
}
