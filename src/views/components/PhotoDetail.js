import React, {useState, useEffect} from 'react';
import UserIcon from "./UserIcon";
import PhotoCard from "./PhotoCard";

import * as _ from 'lodash';
import {navigate} from "../../helpers/HistoryHelper";
import {connect} from "react-redux";
import cn from 'classnames';
import Action from "../../redux/action";
import Photos from "./Photos";

function PhotoDetail(props) {

    const {
        photo = {},
        relatedPhotos,
        onClose = () => {},
        dispatch,
    } = props;

    // useEffect(() => {
    //     dispatch(Action.Creators.fetchRelatedPhotos('note'));
    // }, []);

    function checkEvent(e){
        if(e.keyCode === 13 || e.keyCode === 27){
            onClose();
        }
    }

    useEffect(() => {
        function watchKeyUp(){
            window.addEventListener('keyup', checkEvent);
        }
        watchKeyUp();

        return () => {
            window.removeEventListener('keyup', checkEvent)
        }
    }, []);

    return (
        <div className="PhotoDetail"
             onKeyUp={(e) => {
                 if (e.keyCode === 13) {
                     onClose();
                 }
             }}>

            <div className="bg-wrap">
                <div className="btn-close" onClick={() => onClose()}>
                    <i className="material-icons">cancel</i>
                </div>
                <div className="photo-wrap">
                    <div className="photo-upper clearfix">
                        <div className="left-area">
                            <UserIcon src={photo.user.icon}/>
                            <div className="info-wrap">
                                <div className="user-name"
                                     onClick={() => navigate(`/@${photo.user.username}`)}>{photo.user.username}</div>
                                <div className="user-id">@{photo.user.id}</div>
                            </div>
                        </div>
                        <div className="right-area">
                            <div className={cn('btn-basic', {'like-active': false})}>
                                <i className="material-icons">favorite</i>
                            </div>
                            <div className="btn-basic"><i className="material-icons">add</i>Collect</div>
                            <div className="btn-basic long">Download</div>
                        </div>
                    </div>
                    <div className="main-photo">
                        <img src={photo.urls.regular} alt=""/>
                    </div>
                    <div className="photo-bottom clearfix">
                        <div className="left-area">
                            <i className="material-icons">pets</i>
                            <span className="loc">{photo.user.location}</span>
                        </div>
                        <div className="right-area">
                            <div className="btn-basic"><i className="material-icons">share</i> Share</div>
                            <div className="btn-basic"><i className="material-icons">info</i> Info</div>
                        </div>
                    </div>
                </div>

                <div className="related-photos-wrap">
                    {
                        // relatedPhotos.length > 0 &&  <Photos photos={relatedPhotos}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(PhotoDetail);
