import Lebron from "../../../../assets/images/global/lebron.jpg";
import "./MessageFriend.css";
import { AiFillLock } from "react-icons/ai";

function MessageFriend() {
    return (
        <div className="friend">
            <img src={Lebron} alt="Icon" />
            <div className="friend_message">
                <p className="friend_details"><span className="name">Lebron</span> <AiFillLock /> <span className="friend_details_muted">@Username - December 31, 2020</span></p>
                <p className="message">Hi!!!!!!!!</p>
            </div>
        </div>
    );
}

export default MessageFriend;