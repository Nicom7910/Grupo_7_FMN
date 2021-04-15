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
            <div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">Último producto en la base de datos.</h6>
					</div>
	    			<div className="card-body">
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            <div> <strong>Id Producto:</strong> {this.state.products[largoArray-1].id}</div>
                            <div> <strong>Nombre:</strong> {this.state.products[largoArray-1].name} </div>
                            <div> <strong>Stock:</strong> {this.state.products[largoArray-1].stock} </div>
                            <div> <strong>Precio:</strong> {this.state.products[largoArray-1].price} </div>
                        </div>
					</div>
				</div>
            </div>
            );
        }
    }
};

export default Product;