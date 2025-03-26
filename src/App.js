import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import CustomerLayout from "./layout/CustomerLayout";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import LoginAdmin from "./pages/admin/LoginAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CustomerLayout>
              <Home />
            </CustomerLayout>
          }
        />
        <Route
          path="/products"
          element={
            <CustomerLayout>
              <Products />
            </CustomerLayout>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <Users />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/login"
          element={
            <AdminLayout>
              <LoginAdmin />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
