import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "56px", minHeight: "500px" }}>{children}</div>
      <Footer />
    </>
  );
}
