import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './DealerShopMainPage';
import DealerShopCollectList from './DealerShopCollectList';
import AccountVerification from './AccountVerification';
import ReceiptConfirm from './ReceiptConfirm';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/DealerShopCollectList" element={<DealerShopCollectList />} />
        <Route path="/AccountVerification" element={<AccountVerification />} />
        <Route path="/ReceiptConfirm" element={<ReceiptConfirm />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
