import Header from "./Header";
import Footer from "./Footer";

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default AdminLayout;
