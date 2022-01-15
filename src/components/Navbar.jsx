import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { loggedIncontext } from "../context/loggedIn";
function Navbar() {
  let { logged, setLogged } = useContext(loggedIncontext);
  useEffect(() => {
    getNavbar();
  }, []);
  function getNavbar() {
    let d = JSON.parse(localStorage.getItem("token"));
    if (d) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }
  return (
    <>
      {logged ? (
        <div className="row " style={{ background: "silver", height: "10vh" }}>
          <div className="col">
            <Link to="/Artist/dashboard">Home</Link>
          </div>
          <div className="col">
            <Link to="/profile">profile</Link>
          </div>
          <div className="col">
            <Link
              to="/"
              onClick={() => {
                localStorage.clear("token");
                setLogged(false);
              }}
            >
              logout
            </Link>
          </div>
        </div>
      ) : (
        <div className="row " style={{ background: "silver", height: "10vh" }}>
          <div className="col">
            <Link to="/">Home</Link>
          </div>
          <div className="col">
            <Link to="/login">login</Link>
          </div>
          <div className="col">
            <Link to="/">signup</Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;
