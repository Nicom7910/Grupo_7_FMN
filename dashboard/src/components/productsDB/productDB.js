import React, {Component} from 'react';

class ProductDB extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            productQuantity: 'Cargando...'
        }
    }
    //handler es la función count
    apiCall(url, handler){
        fetch(url)
            .then( response => response.json())
            .then( data => {
                handler(data)
                console.log(data)
            })
            .catch( err => console.log(err))
    }
    
    componentDidMount(){
        console.log(this.props.apiEndPoint)
        this.apiCall(this.props.apiEndPoint, this.count)
    };
    
    count = (data) => {
        this.setState(
            {
                productQuantity: data.data.count
            }
        )
    }

    componentDidUpdate(){
        console.log('se actualizó el componente');
    }
    
    render() {

        return (
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{this.props.name}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.productQuantity}</div>
                            </div>
                            <div className="col-auto">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default ProductDB

// render (){
//     return (
//         <div className="col-md-4 mb-4">
//         <div className="card border-left-primary shadow h-100 py-2">
//             <div className="card-body">
//                 <div className="row no-gutters align-items-center">
//                     <div className="col mr-2">
//                         <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{promps.name}</div>
//                         <div className="h5 mb-0 font-weight-bold text-gray-800">{promps.quantity}</div>
//                     </div>
//                     <div className="col-auto">
//                         {promps.children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }
