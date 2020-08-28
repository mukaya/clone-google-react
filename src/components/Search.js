import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import { useHistory} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({hideButtons=false}) => {
    const [{term},dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    
    const search = (e) => {
        e.preventDefault();
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/search");
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input onChange={(e)=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {
                !hideButtons ? (
                    <div className="serach__buttons">
                        <Button type="submit" onClick={search}>Google Search</Button>
                        <Button variant="outlined">I'm felling lucky</Button>
                    </div>
                ) :
                (
                    <div className="serach__buttons">
                        <Button type="submit" onClick={search} className="serach__buttonsHudden">Google Search</Button>
                        <Button variant="outlined" className="serach__buttonsHudden">I'm felling lucky</Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search;
