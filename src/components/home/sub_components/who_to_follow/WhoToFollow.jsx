import "./WhoToFollow.css";

import Lebron from "../../../../assets/images/global/lebron.jpg";

function WhoToFollow() {
    let follows = [
        {id: 0, name: "Sample Person 1", username: "sample_person1"},
        {id: 1, name: "Sample Person 2", username: "sample_person2"},
        {id: 2, name: "Sample Person 3", username: "sample_person3"},
        {id: 3, name: "Sample Person 4", username: "sample_person4"},
    ];


    return (
        <div className="follows">
            <h4>Who to follow</h4>
            {
                follows.map((follow) => {
                    return (
                        <div className="follow">
                            <img src={Lebron}></img>
                            <div>
                                <p id="name">{ follow.name }</p>
                                <p id="username">@{ follow.username }</p>
                                <input type="submit" value="Follow" />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default WhoToFollow;