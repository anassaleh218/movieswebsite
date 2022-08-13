import { FavlistContext } from "../context/FavlistContext";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Home() {
  const { list, setList } = useContext(FavlistContext);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.tvmaze.com/shows")
    .then((respons) => {
      setShows(respons.data.shows);
    });
  }, []);

  const handleAdd = (show) => {
    setList([...list, show]);
  };

  return (
    <>
      <Navbar></Navbar>

      <div>{!shows === 0 && <div>no data found</div>}</div>

      <div className="mm">
        {shows &&
          shows.map((e) => {
            console.log(e)
            return (
              <div key={e.id}>
                <div>{e.name}</div>
                <div>{e.language}</div>
                <div>{e.genres}</div>
                <button onClick={() => handleAdd(e)}>Add</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

// https://api.tvmaze.com/shows
