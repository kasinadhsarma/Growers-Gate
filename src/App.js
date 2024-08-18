import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // We'll create this file later
import theme from './styles/theme';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import FarmerDashboard from './pages/FarmerDashboard';
import UserDashboard from './pages/UserDashboard';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import CommunityPage from './pages/CommunityPage';
import PaymentMethodPage from './pages/PaymentMethodPage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <CartProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                  <Route path="/user-dashboard" element={<UserDashboard />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/payment" element={<PaymentMethodPage />} />
                  <Route path="/ordering-selling-payments-storage-addage" element={<OrderingSellingPaymentsStorageAddage />} />
                  <Route path="/profile" element={<ProfileModificationAndEditing />} />
                </Routes>
              </Layout>
            </Router>
          </CartProvider>
        </UserProvider>
      </ChakraProvider>
    </I18nextProvider>
  );
}

export default App;
