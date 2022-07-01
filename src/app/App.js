import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import Card from "./component/Card"
import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3/';

const App = function () {

    const [movieID, setMovieID] = useState(157336);
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        setMovieID(157336);
        getDataMoviID();
    }, []);

    const getDataMoviID = async function (data) {
          const res = await axios.get(`${baseURL}movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`);

          console.log("getDataMoviID");
          console.log(data);
        if (res.status === 200) {
            setMovieData(res.data)
        } else {
            console.log(res);
        }
    }
  
    return (
        <div id="App">
            <Search fetchMovieID={getDataMoviID.bind(this)}/>
            <Card data={movieData}/>
        </div>
    );
}

export default App;

