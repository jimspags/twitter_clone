
import "./Tweets.css";

// React Icons
import { BiMessageRoundedDetail, BiDotsHorizontalRounded, BiMessageRounded } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { GiTriangleTarget } from "react-icons/gi";

import Lebron from "../../../../assets/images/global/lebron.jpg";

function Tweets(props) {
    // Convert props.tweets to array
    var tweets = Object.keys(props.tweets).map((key) => props.tweets[key]);
    
    return (
        tweets.map((tweet) => {
            return (
                <div className="tweet">
                    <div className="tweet_controls">
                        <ul>
                            <li className="tweet_message"><BiMessageRoundedDetail /></li>
                            <li className="tweet_name">{ tweet.name }</li>
                            <li><span className="tweet_middle_dot">·</span></li>
                            <li className="tweet_see_more"><a href="#">See more</a></li>
                            <li className="tweet_dismiss"><MdOutlineCancel /></li>
                        </ul>
                    </div>

                    <div className="tweet_content">
                        <img src={Lebron} alt="" />
                        <div className="tweet_post">
                            <ul>
                                <li className="tweet_post_name"><a href="#">{ tweet.name }</a></li>
                                <li className="tweet_post_username"><a href="#">@{tweet.username}</a></li>
                                <li className="tweet_post_time"><a href="#">{tweet.create_at}h</a></li>
                                <li className="tweet_see_more"><BiDotsHorizontalRounded /></li>
                            </ul>
                            <p>{ tweet.post }</p>

                            <div className="tweet_interactions">
                                <ul>
                                    <li><BiMessageRounded /> { (Math.floor(Math.random() * 5000) + 1).toLocaleString("en-US") }</li>
                                    <li><FaRetweet /> { (Math.floor(Math.random() * 5000) + 1).toLocaleString("en-US") } </li>
                                    <li><AiOutlineHeart /> { (Math.floor(Math.random() * 5000) + 1).toLocaleString("en-US") }</li>
                                    <li><FiShare /></li>
                                    <li><GiTriangleTarget /> Tip</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>



            );
        })
    );
    
}

export default Tweets;

