import InfoContainer from './components/infoContainer/container';
import Categories from './components/categoriesList/categories';
import Users from './components/userContainer/user';
import Product from './components/product';

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
								<h6 className="m-0 font-weight-bold text-primary">Last User in Data Dase</h6>
							</div>
							<div className="card-body">
								<Users/>
							</div>
						</div>
					</div>
          <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<Product/>
							</div>
						</div>
        </div>
        <Categories/>
      </div>
    </div>
    </div>
  );
}

export default App;

