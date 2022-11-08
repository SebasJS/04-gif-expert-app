import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Puch', 'Dragon Ball', 'Avengers']);

  const onAddCategory = ( newCategory ) => {
    /*No se recomienda el uso del push, es mejor utilizar el operador ... */

    if( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);

    /*setCategories([...categories, 'Avengers']); */
  }

  return (
    <>
      {/* Titulo */}
        
        <h1> GifExpertApp</h1>

      {/* Input */}
        < AddCategory 
          // setCategories = { setCategories } 
          onNewCategory = { (value) => onAddCategory(value)}
        />

      {/* Listado de Items */}
        {/* Item */}
        <ol>
          { categories.map( ( category ) => {
            {/* En este tipo de creacion de listas se le debe dar una key al item esta debe ser unica para el elemento */}
            return <li key={ category }> { category } </li>
          }) }
        </ol>
    </>
  )
}

