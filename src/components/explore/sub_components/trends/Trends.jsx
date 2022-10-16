import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./Trends.css"

function Trends(props) {
    return (
        props.trends.map((trend) => {
            return (
                <div className="trend">
                <p>{ trend.trendInfo } <span><BiDotsHorizontalRounded /></span></p>
                <p className="title">{ trend.title }</p>
                <p>{ trend.tweets.toLocaleString() }</p>
            </div>)
        })
    );
}

export default Trends;