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
		<Users/>
		<Product/>
        </div>
		
        <Categories/>
		<ProductList></ProductList>
      </div>
    </div>
  );
}

export default App;

