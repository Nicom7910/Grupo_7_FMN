import InfoContainer from './components/infoContainer/container';
import Categories from './components/categoriesList/categories';
import Users from './components/userContainer/user';
import Product from './components/product';
import ProductList from './components/productList/list'

function App() {
  return (
    <div>
      <header></header>
      <div>
        <InfoContainer/>

        <div className="row">
          <div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h6 className="m-0 font-weight-bold text-primary">Último usuario registrado.</h6>
							</div>
							<div className="card-body">
								<Users/>
							</div>
						</div>
					</div>
          <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Último producto en la base de datos.</h6>
								</div>
								<div className="card-body">
									<Product/>
							</div>
						</div>
        </div>
		
        <Categories/>
		<ProductList></ProductList>
      </div>
    </div>
    </div>
  );
}

export default App;

