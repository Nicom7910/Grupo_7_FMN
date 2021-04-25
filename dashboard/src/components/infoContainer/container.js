import React from 'react';
import ProductDB from '../productsDB/productDB'

const infoContainer = (props) =>{


        return (
            <div className="row">
                <ProductDB  name="Productos en la base de datos" apiEndPoint='http://fmnelectronica.xyz/api/products' showData="data.data.count" ProductDB/>
                <ProductDB  name="Cantidad de usuarios" apiEndPoint="http://fmnelectronica.xyz/api/users" showData="data.data.count" ProductDB/>
                <ProductDB name="Cantidad de categorías" apiEndPoint="http://fmnelectronica.xyz/api/products/categories" showData="data.data.countCategories"/>
            </div>
        )
    }
    

export default infoContainer