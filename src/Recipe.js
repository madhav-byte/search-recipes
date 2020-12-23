import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title,img,cal,ingredients}) =>{
    return (
        <div className={style.recipe}>
            <h1> {title} </h1>
           {
               ingredients.map(ingredient=>(<li>{ingredient.text} </li>))
           }
            <p> calories:{cal} </p>

            <img src={img} alt="" className={style.image} />
        </div>
    )
}
export default Recipe;