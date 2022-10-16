// Icons
import { FiSettings } from "react-icons/fi";

// Stylesheet
import "./Notifications.css";

// Sub Components
// Home
import WhoToFollow from "../home/sub_components/who_to_follow/WhoToFollow";
import References from "../home/sub_components/references/References";
import Trends from "../home/sub_components/trends/Trends";
import Tweets from "../home/sub_components/tweets/Tweets";

import "./Notifications.css";

import Notification from "./notification/Notification";

function Notifications() {
    // Change title
    document.title = "Notifications / Twitter";

    const notifClickHandler = (e) => {
        e.preventDefault();
        console.log("Hello")
    }

    const sampleNotications = ["sample notification 1", "sample notification 2", "sample notification 3", "sample notification 4", "sample notification 5"];

    

    return (
        <>
            <div className="explore_main">
                <form>
                    <h4>Notifications</h4>
                </form>
                <span className="settings"><FiSettings /></span>
                <ul>
                    <li><a href="" onClick={notifClickHandler} id="all_notifications">All</a></li>
                    <li><a href="" onClick={notifClickHandler}>Mentions</a></li>
                </ul>
                <Notification notification={sampleNotications} />
            </div>
            <div className="search_trends">
                <form>
                    <input type="text" name="" placeholder="Search Twitter" />
                </form>
                <div className="trends">
                    <h5>Trends for you</h5>
                    <Trends />
                </div>
                <WhoToFollow />
                <References />
            </div>
        </>

    );
}

export default Notifications;