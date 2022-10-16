// Stylesheet
import "./Trends.css";

import { BiDotsHorizontalRounded } from "react-icons/bi";

function Trends() {
    let sampleTrends = [
        {id: 0, trendInfo: "Trending in Philippines", title: "Lorem ipsum 1", tweets: 2522},
        {id: 1, trendInfo: "Music · Trending", title: "Lorem ipsum 2", tweets: 54542},
        {id: 2, trendInfo: "Trending in Philippines", title: "Lorem ipsum 3", tweets: 65652},
        {id: 3, trendInfo: "Trending in Philippines", title: "Lorem ipsum 4", tweets: 53232},
        {id: 4, trendInfo: "Music · Trending", title: "Lorem ipsum 6", tweets: 12332}
    ];

    return (
        sampleTrends.map((trend) => {
            return (
                <div className="trend">
                    <p>{trend.trendInfo} <span><BiDotsHorizontalRounded /></span></p>
                    <p className="title">{trend.title}</p>
                    <p>{trend.tweets.toLocaleString("en-US")} Tweets</p>
                </div>
            );
        })
    );
}

export default Trends;