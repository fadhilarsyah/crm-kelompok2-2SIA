import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './components/MainLayout'
import SalesManagement from './pages/SalesManagement'
import Customers from './pages/Customers'; // atau './pages/Pelanggan'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<SalesManagement/>} />
        <Route path="/pelanggan" element={<Customers />} />
      </Route>
    </Routes>
  )
}

export default App