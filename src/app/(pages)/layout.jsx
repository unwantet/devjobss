import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProtectRouter from "@/components/ProtectRouter";

function PagesLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl w-full mx-auto mt-10 grow ">
        {/* <ProtectRouter>{children}</ProtectRouter> */}
        {children}
      </div>
      <Footer />
    </>
  );
}

export default  PagesLayout