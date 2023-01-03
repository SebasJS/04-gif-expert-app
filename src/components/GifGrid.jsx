
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from '../../src/components/GifItem'


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log( isLoading );
  
    return (
        <>
            <h3> { category } </h3>
            {
                isLoading && (<h2> Cargando... </h2>)
            }
            <div className="card-grid">
                {
                    images.map( ( image) => (
                        <GifItems 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
  )
}
