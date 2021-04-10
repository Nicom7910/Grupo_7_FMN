import React, {useState, useEffect} from 'react';

const Categories = (props) => {

    const [categories, setCategories] = useState('Cargando');

    useEffect( () => {
        fetch('http://localhost:3000/api/products/categories')
            .then(response => response.json())
            .then(data => {
                console.log(data.data.categories)
                setCategories([data.data.categories])
                console.log(categories)
            })
            .catch( err => console.log(err))
    }, [])

    
    return(
        
        
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorias</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    {/* {categories.map( (value, i) => {
                        return (
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body" key={value[i].category}>
                                        {value[i].category}
                                    </div>
                                </div>
                            </div>
                        )            
                    })} */}
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                {categories[0].category}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 02
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 03
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Categories