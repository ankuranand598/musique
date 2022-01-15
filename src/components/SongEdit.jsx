import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SongEdit() {
  let [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getSongs();
  }, []);
  async function getSongs() {
    let x = await axios.get(`http://localhost:2345/songs/${id}`);
    setData(x.data.song);
  }
  console.log(data);
  return (
    <>
      <h1>song page</h1>
      <div>
        {data.map((e) => {
          return (
            <div key={e._id}>
              <h1>{e.name}</h1>
              <button className="btn btn-primary">edit</button>
              <button className="btn btn-danger">delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SongEdit;
