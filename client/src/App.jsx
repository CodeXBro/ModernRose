import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import UserLayout from "./components/user-view/Layout";
import NotFound from "./pages/not-found";
import UserHome from "./pages/user-view/home";
import UserAccount from "./pages/user-view/account";
import UserListing from "./pages/user-view/listing";
import UserCheckout from "./pages/user-view/checkout";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        <Route path="/shop" element={<UserLayout />}>
          <Route path="dashboard" element={<UserHome />} />
          <Route path="account" element={<UserAccount />} />
          <Route path="listing" element={<UserListing />} />
          <Route path="checkout" element={<UserCheckout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
