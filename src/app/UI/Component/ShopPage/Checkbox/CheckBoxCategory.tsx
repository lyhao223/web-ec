import React from 'react'
const CheckBoxContent = [
    {
        id: 1,
        name: "Electronics"
    },
    {
        id: 2,
        name: "Jewelery"
    },
    {
        id: 3,
        name: "Men's clothing"
    },
    {
        id: 4,
        name: "Women's clothing"
    },
]
const CheckBoxCategory = () => {
  return (
   <div className="flex flex-col items-start justify-center space-y-10">
    {CheckBoxContent.map((category)=>(
            <div className="flex flex-row items-center justify-center" key={category.id}>
                <input type="checkbox" name={category.name}/>
                <label>{category.name}</label>
            </div>
        ))}   
    </div>
  )
}

export default CheckBoxCategory
