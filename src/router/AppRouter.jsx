
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../components';
import { AboutPage, CartPage, CheckoutPage, ErrorPage, HomePage, ProductsPage, SingleProductPage } from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    return (
          <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route path="products" element={<ProductsPage/>} />
              <Route path="products/:id" element={<SingleProductPage/>} />
              <Route path="about" element={<AboutPage/>} />
              <Route path="cart" element={<CartPage/>} />
              <Route path='checkout' element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              } />
              <Route path="/" element={<HomePage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </BrowserRouter> 
    )
}
