import {React,useState} from 'react'

const Meal = () => {
    const maeldata=[
        {id: 1,name: "Biryani",
    image: "https://img.magnific.com/premium-photo/plate-food-with-noodles-meat-vegetables_1197144-525.jpg?semt=ais_hybrid&w=740&q=80",
    description: "Aromatic basmati rice cooked with delicious Indian spices.",
    price: 220},
        {id: 2,name: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
    description: "Flavorful fried rice tossed with vegetables and sauces.",
    price: 150},
        {id: 3,name: "Coconut Chickpea Curry",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
    description: "Chickpeas simmered in a creamy coconut milk curry.",
    price: 170},
        {id: 7,name: "Parotta",
    image: "https://t4.ftcdn.net/jpg/16/15/87/75/240_F_1615877555_5rbzWgTbEyT7z4pR63afv77DohaAiq14.jpg",
    description: "Soft, flaky layered flatbread served hot.",
    price: 40}
    ];
  return (
    <div>
      {maeldata.map((event)=>{
        return(
            <>
            <img src={event.image} className="mealimage" />
            <h2 className="mealname">{event.name}</h2>
            <h3 className='mealdesc'>{event.description}</h3>
            <h2>${event.price}</h2>
            </>
        )
      })}
    </div>
  )
}

export default Meal
