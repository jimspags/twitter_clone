import { BsTwitter } from "react-icons/bs";
import "./Notification.css";
function Notification(props) {

    let notifs = props.notification;
    return (
        <>
            <div className="notification">
                <BsTwitter />
                <p>There was a login to your account @JimsPags from a new device on Oct 09, 2022. Review it now.</p>
            </div>
            <div className="notification">
                <BsTwitter />
                <p>There was a login to your account @JimsPags from a new device on Oct 10, 2022. Review it now.</p>
            </div>
        </>
    );

}

export default Notification;