import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductPage from "./pages/ProductPage";
import SideBar from "./Components/SideBar";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
function App() {

  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg--gradient-to-br from-gray-900 via-gray-900 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm'/>
      </div>
      <SideBar />
      <Routes>
        <Route path='/' element={<OverviewPage />}/>
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/sales' element={<SalesPage />}/>
        <Route path='/orders' element={<OrdersPage/>}/>
        <Route path='/analytics' element={<AnalyticsPage/>}/>
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
)
}

export default App;
