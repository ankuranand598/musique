import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Link to="/">Home</Link>
        </div>
        <div className="col">
          <Link to="/login">login</Link>
        </div>
        <div className="col">
          <Link to="/">logout</Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
