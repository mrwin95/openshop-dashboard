import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Product from './components/Product'
import LoginLayout from './components/shared/LoginLayout'
import Login from './components/Login'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Product />} />
                </Route>
                <Route path="login" element={<LoginLayout />}>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
