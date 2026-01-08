import Navbar from "./Navbar";

const Layout = ({ children, setIsLogged }) => {
  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
  };

  return (
    <>
      <Navbar onLogout={logout} />
      {children}
    </>
  );
};

export default Layout;
