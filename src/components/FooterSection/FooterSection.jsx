import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import './footersection.css'
import { useState } from "react";

const FooterSection = () => {

    const [showMuse, setShowMuse] = useState(false);
    const [showQuickLinks, setQuickLinks] = useState(false);
    const [showFollowUs, setShowFallowUs] = useState(false);

    const onClickShowMuse = () => {
        setShowMuse(prevMuse => !prevMuse);
    }

    const onClickShowQuickLinks = () => {
        setQuickLinks(prevQuick => !prevQuick)
    }

    const onClickShowFollowUs = () => {
        setShowFallowUs(prevFollow => !prevFollow);
    }

    return <div className="footer-section">
        <div className="contact-us-section">
            <div className="mail-section">
                <p className="footer-titles">BE THE FIRST TO KNOW</p>
                <p className="footer-desc">Sign up for updates from mettā muse.</p>
                <div className="main-section-input-container">
                    <input type="email" placeholder="Enter your e-mail" className="email-input" />
                    <button className="subscribe-btn" type="button">SUBSCRIBE</button>
                </div>
            </div>
            <div className="contact-us-container">
                <p className="footer-titles">CONTACT US</p>
                <div className="call-us-container">
                    <span className="footer-desc">+44 221 133 5360</span>
                    <span className="footer-desc">customercare@mettamuse.com</span>
                </div>
                <hr className="insmall-line" />
                <p className="footer-titles">CURRENCY</p>
                <span className="dolor"><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723298542/MyMiniProjectsImages/f309ppfiocywqz5fci0d.png" alt="dolor" className="dolor-img" />USD</span>
                <p className="contact-reference">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                <hr className="insmall-line" />
            </div>
        </div>

        <div className='footer-cards-section'>
            <ul className='list-container'>
                <div className="title-container">
                    <p className='list-title'>mettā muse</p>
                    <span className="footer-arrow-icon" onClick={onClickShowMuse}>
                        {showMuse ? <MdOutlineKeyboardArrowUp size="24" /> :
                            <MdOutlineKeyboardArrowDown size="24" />}
                    </span>
                </div>
                <div className={showMuse ? "active-muse" : "inactive-muse"}>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </div>
                <hr className="insmall-line" />
            </ul>
            <ul className='list-container'>
                <div className="title-container">
                    <p className='list-title'>QUICK LINKS</p>
                    <span className="footer-arrow-icon" onClick={onClickShowQuickLinks}>
                        {showQuickLinks ? <MdOutlineKeyboardArrowUp size="24" /> :
                            <MdOutlineKeyboardArrowDown size="24" />}
                    </span>
                </div>
                <div className={showQuickLinks ? "active-muse" : "inactive-muse"}>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </div>
                <hr className="insmall-line" />
            </ul>
            <div className="follow-us-container">
                <ul className='list-container'>
                    <div className="title-container">
                        <p className='list-title'>FOLLOW</p>
                        <span className="footer-arrow-icon" onClick={onClickShowFollowUs}>
                            {showFollowUs ? <MdOutlineKeyboardArrowUp size="24" /> :
                                <MdOutlineKeyboardArrowDown size="24" />}
                        </span>
                    </div>
                    <div className={showFollowUs ? "active-muse" : "inactive-muse"}>
                        <div className="social-list-container">
                            <li className="social-icons"><FaInstagram size="22" /></li>
                            <li className="social-icons"><FaLinkedin size="22" /></li>
                        </div>
                    </div>
                    <hr className="insmall-line" />
                </ul>
                <ul className='list-container'>
                    <p className='list-title'>mettā muse Accepts</p>
                    <div className="cards-container">
                        <li><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723304803/MyMiniProjectsImages/kva6z3sxox22eaerwwux.png" alt="gpay" className="card-img" /></li>
                        <li><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723304083/MyMiniProjectsImages/btbl6axcnqv86pyurx37.png" alt="master card" className="card-img" /></li>
                        <li><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723304189/MyMiniProjectsImages/prufxh3y8tkysiqaahtf.png" alt="pal" className="card-img" /></li>
                        <li><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723304466/MyMiniProjectsImages/yvs0jmpusvy2rqvqcp7g.png" alt="amex" className="card-img" /></li>
                        <li><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723304558/MyMiniProjectsImages/vgkawfrwi5sn8whbpjvs.png" alt="apple pay" className="card-img" /></li>
                        <li><img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723304651/MyMiniProjectsImages/plu8pheslx8ukvtpnjbn.png" alt="o pay" className="card-img" /></li>
                    </div>
                </ul>
            </div>
        </div>
        <footer>
            <p className="copy-right">Copyright © 2023 mettamuse. All rights reserved.</p>
        </footer>
    </div>
}

export default FooterSection