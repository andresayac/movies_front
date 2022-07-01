import React, { useState } from "react";
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';


const Search = function () {

    const TMDBLogo = "https://skempin.github.io/reactjs-tmdb-app/images/tmdb.svg";
    const AsyncTypeahead = withAsync(Typeahead);

    const [options, setOptions] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Nane: " + name + " Value: " + value);
    }

    return (
        <div className="col-xs-12 search-container nopadding">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-5">
                    <a
                        href="./"
                        title="ReactJS TMDb Movie Search"
                    >
                        <img src={TMDBLogo} className="logo" alt="The Movie Database" />
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-7">
                    <form className="searchbox">
                        <AsyncTypeahead
                            isLoading={isLoading}
                            labelKey={option => `${option.original_title}`}
                            id="search"
                            onChange={selected =>
                                this.setState({ selected }, () => this.handleChange(options))
                              }
                            onSearch={(query) => {
                                setIsLoading(true);
                                fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`)
                                    .then(resp => resp.json())
                                    .then(json => {
                                        setIsLoading(true);
                                        setOptions(json.results);
                                    });
                            }}
                            options={options}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;

