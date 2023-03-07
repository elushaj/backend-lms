import {useState} from "react";
import{RiLoginBoxLine,RiLogoutBoxRLine} from 'react-icons/ri'
import {BsFillPersonFill,BsBookmarkCheck,BsBook} from 'react-icons/bs'
import "./searchwidget.scss";
import useFetch from "../../../hooks/useFetch.js";
import { Link } from "react-router-dom";
import BookSearch from "./BookSearch";
import MemberSearch from "./MemberSearch";

const SearchWidget = ({type}) => {


 const [isBooksVisible, setIsBooksVisible] = useState(false);

 const [isMemberVisible, setIsMemberVisible] = useState(false);

return (
    <div className="search-container">
    <div className="buttons">
      <button  onClick={() => setIsBooksVisible(!isBooksVisible)}>
Search Books      </button>

          <button  onClick={() => [setIsMemberVisible(!isMemberVisible),setIsBooksVisible(isBooksVisible)]}>
    Search Members      </button>
       
        </div> 
        <div className="container">
{isBooksVisible && (
        <div className="content"
        >
        <BookSearch />
        </div>
      )}   {isMemberVisible && (
            <div className="content"
            >
            <MemberSearch />
            </div>
          )}</div> 
     </div>
  );
};

export default SearchWidget;
