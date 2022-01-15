import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Artistdash() {
  let [data, setData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    getUserAlbum();
  }, []);
  async function getUserAlbum() {
    let token = JSON.parse(localStorage.getItem("token"));
    //console.log(token);
    let x = await axios.get("http://localhost:2345/albums/artist", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setData(x.data.album);
  }
  async function deleteAlbum(id) {
    let x = await axios.delete(`http://localhost:2345/albums/${id}`);
    console.log(x);
  }
  async function editAlbum(id) {
    history.push(`/edit/album/songs/${id}`);
  }
  return (
    <>
      <h1>Atrist dashboard</h1>
      <div>
        {data.map((e) => {
          return (
            <div key={e._id}>
              <h2>{e.name}</h2>
              <button
                className="btn btn-secondary"
                onClick={() => editAlbum(e._id)}
              >
                edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteAlbum(e._id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Artistdash;
