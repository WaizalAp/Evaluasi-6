import React from 'react';
import '../css/style.css';

const SekE = ({title,pubDate,author,thumbnail,hendleClick}) => {
    return(
     <div className="Home-Style">
     <div className="Home-Style2">
        <div>
            <img className="ga"src={thumbnail} onClick = {hendleClick} />
            <h3 onClick={hendleClick}>{title} </h3>
            <h5>{author}</h5>
            <p>{pubDate}</p>
        </div>
     </div>
     </div>
    );
}

export default SekE;