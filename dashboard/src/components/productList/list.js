import React, {useEffect, useState} from 'react';

function ProductList(){

    const [productList, setProductList] = useState(['Cargando...']);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(data => data.json())
        .then(response => {
            setProductList(response.data.products)
        })
    }, [])
    
    console.log(productList)

    if (productList[0] == 'Cargando...') {
        return(
            <div className="row">
                <div className="card col-md-4 mb-4" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }else {
        return(
            <div className="row">
                {productList.map((val, i ,arr) => {
                    return(
                    <div className="card col-md-4 mb-4" >
                        <div className="card-body">
                            <h5 className="card-title">{val.name}</h5>
                            <p className="card-text">{val.description.slice(0, 50)}...</p>
                            <a href={`http://fmnelectronica.xyz/productos/${val.id}`} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }

    // return(
    //     <div className="row">
    //         {productList.map((val, i, arr) => {
    //             if (val == 'Cargando') {
    //                 <div className="card col-md-4 mb-4" >
    //                 <div className="card-body">
    //                     <h5 className="card-title">Card title</h5>
    //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                     <div className="btn btn-primary">Go somewhere </div>
    //                 </div>
    //             </div>
    //             }
    //         })
    //         }
            // <div className="card col-md-4 mb-4" >
            //     <div className="card-body">
            //         <h5 className="card-title">Card title</h5>
            //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //         <a href="#" className="btn btn-primary">Go somewhere</a>
            //     </div>
            // </div>
    //         <div className="card col-md-4 mb-4" >
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Go somewhere</a>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default ProductList;