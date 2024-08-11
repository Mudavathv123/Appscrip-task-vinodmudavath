import { CiSearch,CiHeart } from "react-icons/ci";
import { BsHandbag,BsPerson } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown,MdOutlineMenu } from "react-icons/md";
import Popup from 'reactjs-popup';

import './headersection.css'

const Header = () => (

    <div className = "header-container">
        <div className="logo-container">
            <Popup
                
                trigger = {
                    <button className="menu-btn">
                    <MdOutlineMenu size="24" className="menu-icon"/>
                    </button>
                }
                position= "bottom left"
            >
                {
                    close => (
                
                <ul className="popup-list-container">
                    <li>Shop</li>
                    <li>Skills</li>
                    <li>Stories</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li onClick={() => close()}>Cancel</li>
                </ul>
                )
            }
            </Popup>
            
            <img src = "https://res.cloudinary.com/dnml2vs6t/image/upload/v1723266013/MyMiniProjectsImages/erzrdvewzbyw3b9bikpm.jpg" alt = "logo" className = "logo-img"/>
        </div>
        <h1 className = "logo-title">LOGO</h1>
        <div className="header-icons-container">
            <CiSearch  className="icon"/>
            <CiHeart   className="icon"/>
            <BsHandbag  className="icon"/>
            <BsPerson  className="icon insmall"/>
            <span className = "langauge-selection insmall">ENG <MdOutlineKeyboardArrowDown  className="icon"/></span>
            
        </div>
    </div>
)

export default Header