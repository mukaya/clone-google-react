import React from 'react'
import "./SearchPage.css";
import {useStateValue} from "../StateProvider";
import userGoogleSearch from '../useGoogleSearch';
import Response from "../response";
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalActivity";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/More";

const SearchPage = () => {
    const [{term}] = useStateValue();
    //const { data } = userGoogleSearch(term);

    const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                    className="searchPage__headerLogo"
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt=""
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons/>
                </div>
                <div className="searchPage__options">
                    <div className="searchPage_optionLeft">
                        <div className="searchPage__option">
                            <SearchIcon />
                            <Link to="/">All</Link>
                        </div>
                        <div className="searchPage__option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchPage__option">
                            <ImageIcon />
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchPage__option">
                            <LocalOfferIcon />
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div className="searchPage__option">
                            <RoomIcon />
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVertIcon />
                            <Link to="/more">More</Link>
                        </div>
                    </div>
                    <div className="searchPage_optionRight">
                        settings tools
                    </div>
                </div>    
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage;
