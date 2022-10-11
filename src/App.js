// Router
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

// Sub components
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import Notifications from "./components/notifications/Notifications";
import Messages from "./components/messages/Messages";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Lists from "./components/lists/Lists";
import Profile from "./components/profile/Profile";

// Stylesheet
import "./App.css";

// Images
import PostIcon from "./assets/images/navigations/post.PNG";
import UserIcon from "./assets/images/navigations/lebron.jpg";

// React Icons
import { BiHomeCircle, BiHash, BiBell, BiMessageSquareDetail, BiBookmark, BiListUl, BiUser, BiDotsHorizontalRounded } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

function App() {
    return (
        <Router>
            <div className="_container">
                <div className="navigations">
                    <ul>
                        <li>
                            <Link to="/"><BsTwitter /></Link>
                        </li>
                        <li>
                            <Link to="/"><BiHomeCircle /></Link>
                        </li>
                        <li>
                            <Link to="/explore"><BiHash /></Link>
                        </li>
                        <li>
                            <Link to="/notifications"><BiBell /></Link>
                        </li>
                        <li>
                            <Link to="/messages"><BiMessageSquareDetail /></Link>
                        </li>
                        <li>
                            <Link to="/bookmarks"><BiBookmark /></Link>
                        </li>
                        <li>
                            <Link to="/lists"><BiListUl /></Link>
                        </li>
                        <li>
                            <Link to="/profile"><BiUser /></Link>
                        </li>
                        <li>
                            <Link to="#"><BiDotsHorizontalRounded /></Link>
                        </li>
                        <li>
                            <Link to="#" id="post"><img src={PostIcon} id="post_icon"></img></Link>
                        </li>
                        <li id="user">
                            <Link to="#" id="post"><img src={UserIcon} id="post_icon"></img></Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/explore' element={<Explore />}></Route>
                        <Route exact path='/notifications' element={<Notifications />}></Route>
                        <Route exact path='/messages' element={<Messages />}></Route>
                        <Route exact path='/bookmarks' element={<Bookmarks />}></Route>
                        <Route exact path='/lists' element={<Lists />}></Route>
                        <Route exact path='/profile' element={<Profile />}></Route>
                    </Routes>
                </div>
            </div>

        </Router>
    );
}

export default App;