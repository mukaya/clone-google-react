import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import { useHistory} from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        
        history.push("/search");
    }
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input onChange={(e)=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            <div className="serach__buttons">
                <Button type="submit" onClick={search}>Google Search</Button>
                <Button variant="outlined">I'm felling lucky</Button>
            </div>
        </div>
    )
}

export default Search;
