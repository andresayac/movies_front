import React, { useState, useEffect } from "react";

let numeral = require('numeral');

const Card = function (props) {

    let data = props.data;

    let poster_img = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
    let total_revenue = data.revenue;
    let production_list = arrayDataToString(data.production_companies);
    let genresList = arrayDataToString(data.genres);
    let backdrop_img = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;

    (data.vote_average === 'undefined' || data.vote_average === 0) ? data.vote_average = '-' : data.vote_average = data.vote_average + ' / 10';
    (total_revenue === 'undefined' || total_revenue === 0) ? total_revenue = '-' : total_revenue = numeral(data.revenue).format('($0,0)');


    function  arrayDataToString(array) {
        let array_tmp = [];
        if (array !== undefined) {
            array.forEach(function (item) {
                array_tmp.push(item.name);
            });
        }
        return array_tmp.join(', ');

    };

    useEffect(() => {
        document.body.style.backgroundImage = 'url(' + backdrop_img + ')';
    }, []);


    return (
        <div className="col-xs-12 cardcont nopadding">

            <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                <h1>{data.original_title}</h1>

                <span className="tagline">{data.tagline}</span>
                <p>{data.overview}</p>
                <div className="additional-details">
                    <span className="genre-list">{genresList}</span>
                    <span className="production-list">{production_list}</span>
                    <div className="row nopadding release-details">
                        <div className="col-xs-6"> Original Release: <span className="meta-data">{data.release_date}</span></div>
                        <div className="col-xs-6"> Running Time: <span className="meta-data">{data.runtime} mins</span> </div>
                        <div className="col-xs-6"> Box Office: <span className="meta-data">{total_revenue}</span></div>
                        <div className="col-xs-6"> Vote Average: <span className="meta-data">{data.vote_average}</span></div>
                    </div>
                </div>
            </div>
            <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                <img id="postertest" className='poster' src={poster_img} />
            </div>
        </div>
    );
}

export default Card;

