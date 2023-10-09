import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function IngredientList({ingredients, serves}){
    const [servings, setServings] = useState(serves)

    function handleChange(event) {
        setServings(event.target.value)
      }

    return(
        <>
        <input type="number" value={servings} onChange={handleChange}/>
        <ul>
        {
            ingredients.map((ingredient) => {
                const amount = ingredient.amount * servings / serves
                return (
                    <li><strong>{ingredient.name}</strong>: {`${amount} ${ingredient.unit}`}</li>
                )
            })
        }
    </ul> 
    </>
    )
}