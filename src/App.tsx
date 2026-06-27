import { Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { Route } from 'react-router-dom'
import Login from './Pages/Login'
import ProductPage from './Pages/ProductPage'
import SearchResult from './Pages/SearchResult'
import FlashDeals from './Pages/FlashDeals'
import OrderTracking from './Pages/OrderTracking'
import MyOrder from './Pages/MyOrder'
import Addresses from './Pages/Addresses'
import Home from './Pages/Home'
import Products from './Pages/Products'
import CheckOut from './Pages/CheckOut'

function App() {
  return (
    <>
    
      <Toaster position='top-right' />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/deals' element={<FlashDeals />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/orders' element={<MyOrder />} />
        <Route path='/orders/:id' element={<OrderTracking />} />
        <Route path='/addresses' element={<Addresses />} />
      </Routes>
    </>
  )
}

export default App
