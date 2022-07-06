import {Auth0Provider} from '@auth0/auth0-react';
import './App.css'
import { AppRouter } from './router/AppRouter'
import {ProductsProvider, CartProvider, FilterProvider, UserProvider } from './context'

function App() {
  
  return (
    <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENTID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
  )
}

export default App
