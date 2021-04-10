import React, {useState, useEffect} from 'react';

function ProductDB(props) {

    const [info, setInfo] = useState('cargando...');

    //handler es la función count
    const apiCall = (url, handler) =>{
        fetch(url)
            .then( response => response.json())
            .then( data => {
                handler(data)
            })
            .catch( err => console.log(err))
    }

    //data si se está consumiendo. El prop showInfo agarra la info necesaria
    const count = (data) => {
        setInfo(eval(props.showData))
    }

    useEffect( ()=> {
        console.log(props.apiEndPoint)
        apiCall(props.apiEndPoint, count)  
    }, [])

    
        return (
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.name}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{info}</div>
                            </div>
                            <div className="col-auto">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
