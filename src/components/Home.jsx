import { useContext, useEffect, useState } from "react";
import { loggedIncontext } from "../context/loggedIn";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Home() {
  let { logged } = useContext(loggedIncontext);
  let [data, setData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let x = await axios.get("http://localhost:2345/albums");
    console.log(x.data);
    setData(x.data);
  }
  function showDetail(id) {
    history.push(`/songs/${id}`);
    //alert(id);
  }
  // console.log(logged);
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,30%)" }}>
        {data.map((e) => {
          return (
            <div key={e._id} onClick={() => showDetail(e._id)}>
              <h1> {e.name}</h1>

              <p>artist:{e.artistId.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
