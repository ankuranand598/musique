import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Songs() {
  let { album } = useParams();
  let [data, setData] = useState([]);
  //console.log(album);
  useEffect(() => {
    getSongs();
  }, []);
  async function getSongs() {
    let x = await axios.get(`http://localhost:2345/songs/${album}`);
    //console.log(x.data);
    setData(x.data.song);
  }
  return (
    <>
      <h1>songs</h1>
      <div>
        {data.map((e) => {
          return <p key={e._id}>{e.name}</p>;
        })}
      </div>
    </>
  );
}
