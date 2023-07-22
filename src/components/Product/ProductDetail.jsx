//Para obtener la información de los productos, debo importarlos de la fuente:
import products from "../../data/product.json"


//Para obtener el id del producto que me están enviando, necesito utilizar la función useParams
//Esta función me da información de los parámetros de la ruta
import { useParams } from "react-router-dom";
//Después de importarlo, hacemos un console.log en la función para ver lo que nos devuelve}
//Nos devolverá un objeto con todos parámetros que tenga la ruta


function ProductDetail() {
    //Hacemos el console.log haciendo un destructuring de lo que recibe de la ruta que es el id de la función useParams

    const { id } = useParams();
    //console.log(id)
    //Después de importar los productos, debemos encontrar el producto que queremos mostrar con el "Find"
    //Eljson nos da products.items
    const findedProduct = products.items.find((prod) => prod.id === id)
    //Para comprobar, hago un console.log de findedProduct

    //console.log(findedProduct)

    //Una vez comprobado, pinto la información del producto en el return

    return (
        // Para que funcione el link en Home, debemos hacer un "renderizado condicional"
        //Pinto el producto en función de una condición
        //Hacemos un ternario
        findedProduct ? (
            <>
            <h1>Componente Detalle de Producto {id}</h1>
            <img src={findedProduct.imageUrl} alt="" />
            <h3>{findedProduct.name}</h3>
            <p>Precio: {findedProduct.price}</p>
            <p>Descripción: {findedProduct.description}</p>
            <ul className="ul-size">
                {/* Quiero retornar cada talla en un botón */}
                {/* Me da error porque los li no tienen key.
                Me lo importo en el map y, lo identifico en el li */}
                {findedProduct.sizes.map((size, i) => <li key={i}> <button>{size}</button></li>)}
            </ul>
        </>
        )
        :
        <h2>Debes definir un producto</h2>
        
    )
}

export default ProductDetail;