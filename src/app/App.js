import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import Card from "./component/Card"
import axios from "axios";

/* 
const [movieID, setMovieID] = useState(0);
setMovieID(157336); */


const baseURL = 'https://api.themoviedb.org/3/';

const App = function () {

    const [movieID, setMovieID] = useState(157336);
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        console.log("HOLA INICIO APP")
        setMovieID(157336);
        getDataMoviID();
    }, []);


    const getDataMoviID = async function (event) {
          const res = await axios.get(`${baseURL}movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`);

        if (res.status === 200) {
            setMovieData(res.data)
        } else {
            console.log(res);
        }
    }
  

    return (
        <div id="App">
            <Search />
            <Card data={movieData}/>
        </div>
    );
}

export default App;

