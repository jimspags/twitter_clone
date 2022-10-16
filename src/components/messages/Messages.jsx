import MessageFriend from "./sub_components/message_friend/MessageFriend";
import "./Messages.css";

// React Icons
import { FiSettings } from "react-icons/fi";
import { TbMessagePlus } from "react-icons/tb";
import { AiOutlineInfoCircle, AiFillLock } from "react-icons/ai";

import Lebron from "../../assets/images/global/lebron.jpg";

function Messages() {
    return (
        <div className="messages">
            <div className="messages_people">
                <h4>Messages</h4>
                <input type="text" name="search_people" id="messages_search" placeholder="Search Direct Messages" />
                <ul>
                    <li><FiSettings /></li>
                    <li><TbMessagePlus /></li>
                </ul>
                <MessageFriend />
            </div>
            <div className="messages_chats">
                <div className="messages_profile">
                    <img src={Lebron} alt="Profile" />
                    <p>Lebron <AiFillLock /></p>
                    <AiOutlineInfoCircle />
                </div>
                <div className="chats">

                    <div className="them">
                        <p className="them_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>

                    <div className="me">
                        <p className="me_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>
                    
                    <div className="them">
                        <p className="them_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>

                    <div className="me">
                        <p className="me_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>
                    <div className="them">
                        <p className="them_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>

                    <div className="me">
                        <p className="me_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>
                    <div className="them">
                        <p className="them_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>

                    <div className="me">
                        <p className="me_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>
                    <div className="me">
                        <p className="me_message">Sample Message</p>
                        <p className="chats_date">Dec 10, 2020. 9:43PM</p>
                    </div>

                </div>
                <div className="send_message">
                    <input type="text" name="send_message" id="" placeholder="Start a new message"/>
                </div>
            </div>
        </div>
    );
}

export default Messages;