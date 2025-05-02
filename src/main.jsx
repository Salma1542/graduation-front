import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import App from './App.jsx'
import TokenContextProvider from './Context/TokenContext.jsx'
import { PostProvider } from './Context/PostContext.jsx'  
import CartContextProvider from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <TokenContextProvider>
    <CartContextProvider>
    <PostProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </PostProvider>
    </CartContextProvider>
  </TokenContextProvider>
)
