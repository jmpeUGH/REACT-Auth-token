//Componente para pintar todos los productos del listado
//Debemos importar los datos del json
import { Link } from "react-router-dom";
import products from "../../data/product.json"
import ProductCard from "./ProductCard";

//compruebo con un console.log
//Como me interesa que este display de productos se vea en el inicio, debo importar ProductList en el Home en vez de en la App

function ProductList() {

    //console.log(products);
    //Con este console, hemos comprobado que tenemos los productos en Home, después de haber importado allí, ProductList

    //Para recobrar el valor de estos datos, los mapeo
    //Voy a crear una función par retornar lo que me produzca el map

    const renderProductList = () => {
        //Tengo que hacer el map, sobre el objeto que contiene el array que quiero "renderizar"
        //Tengo que recorrer la propiedad items de cada objeto del Array,
        //por lo que el map lo tengo que hacer sobre los productsImportados.items
        // Dentro del map tengo que retornar la estructura que quiero crear. En este caso, un li de cada product de productos.
        //Cada li debe estar determinado por el id de cada objeto del Array
        //Para poder clicarlos y mostrarlos en página individual con todas sus propiedades, debo envolverlos para hacer un Link
        //Previamente debo importar la función Link

        return products.items.map((product) =>
            // Este li funciona, pero si queremos mandar un montón de información de cada producto, conviene crear un componente propio que renderizaremos en el li.
            // En este caso, crearemos ProductCard y lo comentamos
            // <li key={product.id}>
            //     {/*En este li, que se va a mostrar en Home, quiero que aparezcan solamente la imagen y el nombre*/}
            //     {/* He añadido dos Link asociados a la misma Ruta para separar los click de imagen y nombre */}
            //     <Link to={"/producto/" + product.id}>
            //         <img src={product.imageUrl} alt="" />
            //     </Link>
            //     <Link to={`/producto/${product.id}`}>
            //         <h3>{product.name}</h3>
            //     </Link>

            // </li>)
            <li key={product.id}>
            {/* Para poder llamar a ProductCard desde aquí, debemos importarlo */}
            {/* En ProductList es donde tengo la información de los productos
            Para poder pintar esta información, debo enviar por props la información a ProductCard */}
            {/* Como estamos dentro del map, es "product"quien tiene la información que tenemos que enviar: */}
                <Link  to={"/producto/" + product.id}>
                    <ProductCard product={product} />
                </Link>

            </li>
        )
    }
    //Aquí llamo a la función que que me devuelve lo que quiero mostrar
    return (
        <ul>
            {renderProductList()}
        </ul>
    )

}

export default ProductList;