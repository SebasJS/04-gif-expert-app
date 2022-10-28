import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Puch', 'Dragon Ball']);

  const onAddCategory = () => {
    /*No se recomienda el uso del push, es mejor utilizar el operador ... */
    setCategories([...categories, 'Avengers']);

  }

  console.log( categories );
  return (
    <>
      {/* Titulo */}
        
        <h1> GifExpertApp</h1>

      {/* Input */}
        < AddCategory />

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

