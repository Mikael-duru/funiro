import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import CartState from './Context/cart/CartState';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		{/* <CartState> */}
			<App />
		{/* </CartState> */}
	</StrictMode>
);
