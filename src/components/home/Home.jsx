// Icons
import { BsStars, BsFillImageFill, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { BiPoll, BiCurrentLocation } from "react-icons/bi";

// Images
import UserIcon from "../../assets/images/global/lebron.jpg";

// Stylesheet
import "./Home.css";

// Sub Components
import Trends from "./sub_components/trends/Trends";
import WhoToFollow from "./sub_components/who_to_follow/WhoToFollow";
import References from "./sub_components/references/References";

// Second version of component
import Tweets from "./sub_components/tweets/Tweets";

import { useState } from "react";

function Home() {
    // Change title
    document.title = "Home / Twitter";

    const [postConfig, setPostConfig] = useState(false);

    // Tweets
    let tweets = [
        {id: 0, name: "Person 1", username: "Username 1", created_at: 23, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 1, name: "Person 2", username: "Username 2", created_at: 21, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 2, name: "Person 3", username: "Username 3", created_at: 13, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 3, name: "Person 4", username: "Username 4", created_at: 20, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."},
        {id: 4, name: "Person 5", username: "Username 5", created_at: 5, post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi temporibus quis necessitatibus ad voluptate nesciunt itaque, architecto tenetur quisquam quo natus inventore porro animi blanditiis eum similique perspiciatis ducimus."}
    ];


    
    const clickHandlerPost = () => {
        setPostConfig(true);
    }

    const choose_audience = () => {
        return (
            <select id="choose_audience">
                <option>Everyone</option>
                <option>Twitter Circle</option>
            </select>
        );
    }

    const who_reply = () => {
        return (
            <select id="who_reply">
                <option>Everyone</option>
                <option>People you follow</option>
                <option>Only people you mention</option>
            </select>
        );
    }

    
    return (
        <>
            <div className="home_main">
                <h4>Home</h4>
                <span id="top_tweets"><BsStars /></span>
                <div className="post">
                    <img src={UserIcon} alt="" />
                    <form>
                        {postConfig ? choose_audience() : ""}
                        <textarea name="" id="" cols="30" rows="1" placeholder="What's happening?" onClick={clickHandlerPost}></textarea>
                        {postConfig ? who_reply() : ""}


                        <ul>
                            <li><BsFillImageFill /></li>
                            <li><AiOutlineFileGif /></li>
                            <li><BiPoll /></li>
                            <li><BsEmojiSmile /></li>
                            <li><AiOutlineSchedule /></li>
                            <li><BiCurrentLocation /></li>
                            <li id="post_tweet">
                                <input type="submit" value="Tweet" />
                            </li>
                        </ul>
                    </form>
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

export default Home;