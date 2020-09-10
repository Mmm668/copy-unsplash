import React, {useState, useEffect} from 'react';
import * as _ from 'lodash';
import PhotoCard from "./PhotoCard";
import PhotoDetail from "./PhotoDetail";
import {connect} from "react-redux";
import Action from "../../redux/action";
import PreLoader from "./PreLoader";

function Photos(props) {

    const {
        dispatch,
        isLoading,
        selectedPhoto,
        photos = [],
    } = props;

    let _photos = [[], [], []];
    _.map(photos, (photo, i) => {
        if (i % 3 === 0) {
            _photos[0].push(photo);
        } else if (i % 3 === 1) {
            _photos[1].push(photo);
        } else if (i % 3 === 2) {
            _photos[2].push(photo);
        }
    });

    return (
        <div className="Photos" style={{position: 'relative'}}>
            <PreLoader isLoading={isLoading}/>
            {
                _.map(_photos, (group, i) => <PhotoGroup
                    key={i}
                    group={group}
                    dispatch={dispatch}

                />)
            }
            {
                _.keys(selectedPhoto).length > 0 &&
                <PhotoDetail photo={selectedPhoto}
                             onClose={() => {
                                 dispatch(Action.Creators.updateState({opacityScreen:false, selectedPhoto: {}}))
                             }}
                />
            }
        </div>
    )
}


function PhotoGroup(props) {
    const {
        dispatch,
        group,
    } = props;

    return (
        <div className="photo-col">
            {
                _.map(group, (photo, i) => <PhotoCard
                    key={i}
                    photo={photo}
                    showDetail={() => dispatch(Action.Creators.updateState({opacityScreen:true ,selectedPhoto: photo}))}
                />)
            }
        </div>
    )
}

export default connect(state => ({...state}), (dispatch) => ({dispatch}))(Photos); //(state) => ({...state})
