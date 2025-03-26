import Header from "./Header";
import Footer from "./Footer";

function CustomerLayout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default CustomerLayout;
