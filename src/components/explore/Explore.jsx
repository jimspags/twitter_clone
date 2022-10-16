// Icons
import { FiSettings } from "react-icons/fi";

import NBABackground from "../../assets/explore/background.PNG";

// Stylesheet
import "./Explore.css";

// Sub Components
// Home
import WhoToFollow from "../home/sub_components/who_to_follow/WhoToFollow";
import References from "../home/sub_components/references/References";

//explore
import Trends from "./sub_components/trends/Trends";

// Second version of component
import Tweets from "../home/sub_components/tweets/Tweets";


function Explore() {
    // Change title
    document.title = "Explore / Twitter";

    // Tweets
    let tweets = [
        {id: 0, name: "Person 1", username: "Username 1", created_at: 23, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 1, name: "Person 2", username: "Username 2", created_at: 21, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 2, name: "Person 3", username: "Username 3", created_at: 13, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 3, name: "Person 4", username: "Username 4", created_at: 20, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 4, name: "Person 5", username: "Username 5", created_at: 5, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."}
    ];

    let sampleTrends = [
        {id: 0, trendInfo: "Trending in Philippines", title: "Lorem ipsum 1", tweets: (Math.floor(Math.random() * 5000) + 1)},
        {id: 1, trendInfo: "Music · Trending", title: "Lorem ipsum 2", tweets: (Math.floor(Math.random() * 5000) + 1)},
        {id: 2, trendInfo: "Trending in Philippines", title: "Lorem ipsum 3", tweets: (Math.floor(Math.random() * 5000) + 1)},
        {id: 3, trendInfo: "Trending in Philippines", title: "Lorem ipsum 4", tweets: (Math.floor(Math.random() * 5000) + 1)},
        {id: 4, trendInfo: "Music · Trending", title: "Lorem ipsum 6", tweets: (Math.floor(Math.random() * 5000) + 1)}
    ];

    
    return (
        <>
            <div className="explore_main">
                <form>
                    <input type="text" name="" placeholder="Search Twitter" />
                </form>

                <span className="settings"><FiSettings /></span>

                <div className="main_trends">
                    <img src={ NBABackground } alt="NBA background" />
                    <div className="main_trends_description">
                        <p><span>Music</span> · LIVE</p>
                        <h4>Test</h4>
                    </div>
                </div>

                <div className="trends">
                    <h5>Trends for you</h5>
                    <Trends trends={sampleTrends}/>
                </div>
                <div className="tweets">
                    <Tweets tweets={tweets} />
                </div>
            </div>
            <div className="search_trends">
                <WhoToFollow />
                <References />
            </div>
        </>

    );
}

export default Explore;