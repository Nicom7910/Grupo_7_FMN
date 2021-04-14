import React, {useState, useEffect} from 'react';

const Categories = (props) => {

    const [categories, setCategories] = useState(['Cargando']);

    useEffect( () => {
        fetch('http://localhost:3000/api/products/categories')
            .then(response => response.json())
            .then(data => {
                console.log(data.data.categories)
                setCategories(data.data.categories)
            })
            .catch( err => console.log(err))
    }, [])

    console.log(categories)
    return(
        
        
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorias</h6>
            </div>
            <div className="card-body">
                <div className="row">

                    {
                        categories.map( (val, i) => {
                            if (val == 'Category') {
                                <li>{val}</li>
                            }else {
                                return(
                                    <div className="col-lg-6 mb-4">
                                        <a href={`http://localhost:3000/productos/${val.category}`} key={val.category}>
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                {val.category}
                                            </div>
                                        </div>
                                    </a>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Categories