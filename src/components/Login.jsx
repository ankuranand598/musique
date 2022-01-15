import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { loggedIncontext } from "../context/loggedIn";
function Login() {
  let [obj, setObj] = useState({});
  let history = useHistory();
  let { logged, setLogged } = useContext(loggedIncontext);
  let [x, setX] = useState(false);
  function handleIp(e) {
    let { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  }
  console.log(obj);
  let handleForm = async (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:2345/login",
      data: obj,
    })
      .then(function (response) {
        if (response) {
          setX(false);
          console.log(response.data);
          localStorage.setItem("token", JSON.stringify(response.data.token));
          setLogged(true);
          history.push("/Artist/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
        setX(true);
      });
  };
  return (
    <>
      <p>If you are an artist you could login and add you albums here</p>
      <div>
        <form action="" onSubmit={handleForm}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@artist.com"
              name="email"
              value={obj.name}
              onChange={handleIp}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="********"
              name="password"
              value={obj.password}
              onChange={handleIp}
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-secondary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      {x ? <h1>Something went wrong</h1> : ""}
    </>
  );
}
export default Login;
