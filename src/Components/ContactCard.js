import "../Styles/contact-card.scss";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function ContactCard() {

    const phoneNum = "+1 (604)-763-8766";
    const email = "pedrogaldfreitas@gmail.com";
    const location = "Burnaby, BC, Canada";
    
    return (
        <div className="contact-card">
            <div className="contact-section">
                <div className="contact-icon">
                    <FaPhone />
                </div>
                <div className="contact-text">
                    {phoneNum}
                </div>
            </div>
            <div className="contact-section">
                <div className="contact-icon">
                    <MdMail />
                </div>
                <div className="contact-text">
                    {email}
                </div>
            </div>
            <div className="contact-section last">
                <div className="contact-icon">
                    <BsFillGeoAltFill />
                </div>
                <div className="contact-text">
                    {location}
                </div>
            </div>
        </div>
    )
}