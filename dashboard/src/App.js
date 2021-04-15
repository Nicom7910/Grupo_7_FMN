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
		<Users/>
		<Product/>
        </div>
        <Categories/>
      </div>
    </div>
  );
}

export default App;

