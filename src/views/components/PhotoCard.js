import React, {useState, useEffect} from 'react';
import UserIcon from "./UserIcon";

function PhotoCard(props) {
    const {
        photo = {},
        showDetail = () => {},
    } = props;

    return (
        <div className="PhotoCard" onClick={() => {
            showDetail()
        }}>
            <img src={photo.urls.small} alt="" className="img"/>
            <div className="desc">

                <div className="upper">
                    <div className="left-area">
                        <div className="info-txt"><i className="material-icons">info</i> sponsored</div>
                    </div>
                    <div className="right-area">
                        <div className="btn-basic"><i className="material-icons">favorite</i></div>
                        <div className="btn-basic"><i className="material-icons">add</i>Collect</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left-area">
                        <div className="user-wrap">
                            <UserIcon src={photo.user.icon}/>
                            <div className="name">{photo.user.name}</div>
                        </div>
                    </div>
                    <div className="right-area">
                        <div className="btn-basic"><i className="material-icons">arrow_downward</i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard;