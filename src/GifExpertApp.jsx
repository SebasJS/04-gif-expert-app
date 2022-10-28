import { useState } from "react";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Puch', 'Dragon Ball']);

  console.log( categories );
  return (
    <>
      {/* Titulo */}
        
        <h1> GifExpertApp</h1>

      {/* Input */}

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

