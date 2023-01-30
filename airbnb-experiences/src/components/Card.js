import React from "react";
// import katiePic from '../images/katie.png';
import star from '../images/star.png';



export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "ONLINE"){
        badgeText = "Online";
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className='card-image' />
            <div className="card-stats">
                <img src={star} className='star-image' />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p> <span className="price">From ${props.item.price}</span> / person</p>
        </div>
    );
}

