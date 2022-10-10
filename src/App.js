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

function App() {
    return (
        <Router>
            <div className="_container">
                <div className="navigations">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/explore">Explore</Link>
                        </li>
                        <li>
                            <Link to="/notifications">Notifications</Link>
                        </li>
                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>
                        <li>
                            <Link to="/bookmarks">Bookmarks</Link>
                        </li>
                        <li>
                            <Link to="/lists">Lists</Link>
                        </li>
                        <li>
                            <Link to="/profile">profile</Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path='/home' element={<Home />}></Route>
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