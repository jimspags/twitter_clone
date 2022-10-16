// Icons
import { BsStars } from "react-icons/bs";

// Stylesheet
import "./Bookmarks.css";

// Sub Components
import Trends from "../home/sub_components/trends/Trends";
import WhoToFollow from "../home/sub_components/who_to_follow/WhoToFollow";
import References from "../home/sub_components/references/References";

// Second version of component
import Tweets from "../home/sub_components/tweets/Tweets";

function Bookmarks() {
    // Change title
    document.title = "Bookmarks / Twitter";

    // Tweets
    let tweets = [
        {id: 0, name: "Person 1", username: "Username 1", created_at: 23, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 1, name: "Person 2", username: "Username 2", created_at: 21, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 2, name: "Person 3", username: "Username 3", created_at: 13, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 3, name: "Person 4", username: "Username 4", created_at: 20, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 4, name: "Person 5", username: "Username 5", created_at: 5, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."}
    ];

    
    return (
        <>
            <div className="home_main">
                <h4>Bookmarks</h4>
                <span id="top_tweets"><BsStars /></span>
                <p id="username">@sampleUser1</p>
                <div className="post">
                    <div className="tweets">
                        <Tweets tweets={tweets} />
                    </div>
                </div>
            </div>
            <div className="search_trends">
                <form>
                    <input type="text" name="" placeholder="Search Twitter" />
                </form>
                <div className="trends">
                    <h4>Trends for you</h4>
                    <Trends />
                    {/* First version - It should have attribute to handle data */}
                </div>

                <div className="who_to_follow">
                    <WhoToFollow />
                </div>

                <div className="references">
                    <References />
                </div>
            </div>
        </>

    );
}

export default Bookmarks;