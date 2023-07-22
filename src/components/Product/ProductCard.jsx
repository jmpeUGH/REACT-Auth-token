
//Recibo los props desde ProductList y hago un destructuring

function ProductCard({ product }) {
    //Dentro del return vamos a crear un article que contenga los detalles de cada producto
    // En nuestro caso, lo que contenía el li de ProductList

    return (
        <article>
            
                <img src={product.imageUrl} alt="" />
                   
                <h3>{product.name}</h3>
         
        </article>
    )


}

export default ProductCard;