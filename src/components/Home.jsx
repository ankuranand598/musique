import { useContext, useEffect, useState } from "react";
import { loggedIncontext } from "../context/loggedIn";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function Home() {
  let { logged } = useContext(loggedIncontext);
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [page1, setPage1] = useState(0);
  let history = useHistory();
  let { p } = useParams();
  console.log(p);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let x = await axios.get(`http://localhost:2345/albums?page=${+p}`);
    console.log(x.data.album);
    setData(x.data.album);
    setPage(x.data.totalPages);
    //setPage1(1);
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
              <img src="/logo.gif" style={{ width: "150px" }} alt="logo" />
              <h1> {e.name}</h1>

              <p>artist:{e.artistId.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="btn btn-primary"
          disabled={page1 == 0}
          onClick={async () => {
            setPage1(page1 - 1);
            history.push(`/page/${+p - 1}`);
            //console.log(page1);
            // let x = await axios.get(
            //   `http://localhost:2345/albums?page=${page1 - 1}`
            // );
            // console.log(x.data.album);
            // setData(x.data.album);
          }}
        >
          Prev
        </button>
        {page1 + 1} out of {page + 2} pages
        <button
          className="btn btn-primary"
          onClick={async () => {
            setPage1((page1) => page1 + 1);
            history.push(`/page/${+p + 1}`);
            //console.log(page1);
            // let x = await axios.get(
            //   `http://localhost:2345/albums?page=${page1 + 1}`
            // );
            // console.log(x.data.album);
            // setData(x.data.album);
          }}
          disabled={page1 == page + 1}
        >
          next
        </button>
      </div>
    </>
  );
}
export default Home;
