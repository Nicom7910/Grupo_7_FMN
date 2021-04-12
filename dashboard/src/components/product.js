import React, {Component} from 'react';

class Product extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }

    componentDidMount(){
        fetch('http://fmnelectronica.xyz/api/products')
            .then(res => res.json())
            .then( (resultado) => {
                console.log(resultado)
                this.setState({
                    isLoaded: true,
                    products: resultado.data.products
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}

render() {

    const {error, isLoaded, products} = this.state;

    if(error){
        return <div> Error </div>
    }
    else if ( !isLoaded) {
        return <div>Cargando...</div>
    }
    else{
        let largoArray = this.state.products.length;
        return ( 
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <div> <strong>Id Producto:</strong> {this.state.products[largoArray-1].id}</div>
                    <div> <strong>Nombre:</strong> {this.state.products[largoArray-1].name} </div>
                    <div> <strong>Descripcion:</strong> {this.state.products[largoArray-1].description} </div>
                </div>
            );
        }
    }
};

export default Product;