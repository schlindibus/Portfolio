import Navbar from "./navbar";
import Footers from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}      
      <Footers />
    </div>
  );
};

export default Layout;
