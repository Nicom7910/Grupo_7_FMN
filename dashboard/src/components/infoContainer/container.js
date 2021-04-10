import React, {Component} from 'react';
import ProductDB from '../productsDB/productDB'

class infoContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            info: 'Cargando..'
        };
    }

    render(){
        return (
            <div className="row">
                <ProductDB  name="Productos en la base de datos" apiEndPoint='http://fmnelectronica.xyz/api/products' searchedData="data.count" ProductDB/>
                <ProductDB  name="Cantidad de usuarios" apiEndPoint="http://localhost:3002/api/users" ProductDB/>
                <ProductDB/>
            </div>
        )
    }
    
}

export default infoContainer