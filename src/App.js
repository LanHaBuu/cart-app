import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutDefault from "./components/LayoutDefault/LayoutDefault"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import Pay from "./pages/Pay/Pay"
import Products from "./pages/Product/Products"
import ProductDetail from "./pages/ProductDetail/ProductDetail"

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<LayoutDefault />}>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route
							path='/product/:id'
							element={<ProductDetail />}
						/>
						<Route path='/cart' element={<Cart />} />
					</Route>
					<Route path='/pay' element={<Pay />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
