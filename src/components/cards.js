import React from 'react';

function Card(props) {

    return (
        <div className="card">
            <div className="cardHeader">
                {props.header}
            </div>
            <div className="cardContent">
                {props.content}
            </div>
            <div className="cardFooter">
                {/* {props.footer} */}
            </div>
        </div>
    );
}

export default Card;