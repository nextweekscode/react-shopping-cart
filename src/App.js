import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext'
import { ProductContext } from './contexts/ProductContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
		// add the given item to the cart
	};

	return (
		<div className="App">
			<ProductContext.Provider value= {{products, addItem}}>
				<CartContext.Provider value={{ cart }}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
