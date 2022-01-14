import { useContext } from "react";
import { loggedIncontext } from "../context/loggedIn";
function Home() {
  let { logged } = useContext(loggedIncontext);
  console.log(logged);
  return <>{logged ? <h1>Home logged</h1> : <h1>Home not</h1>}</>;
}
export default Home;
