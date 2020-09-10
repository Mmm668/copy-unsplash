import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Action from "../../redux/action";
import {connect} from "react-redux";
import {navigate} from "../../helpers/HistoryHelper";
import {makeADash} from "../../helpers/CommonHelper";

function HeaderCategory(props) {

    const {
        dispatch
    } = props;

    const bigCategory = [
        {
            title: 'wallpapers',
            id: '1065976',
        },
        {
            title: 'business & work',
            id: '3348877',
        },
        {
            title: 'nature',
            id: '3330448'
        },
        {
            title: 'people',
            id: '3356568'
        },
        {
            title: 'unsplash editorial',
            id: '317099'
        },
        {
            title: 'health',
            id: '3356594'
        },
        {
            title: 'textures & patterns',
            id: '3330445'
        },
        {
            title: 'nature',
            id: '3330448'
        },
        {
            title: 'people',
            id: '3356568'
        },
        {
            title: 'unsplash editorial',
            id: '317099'
        },
        {
            title: 'health',
            id: '3356594'
        },
        {
            title: 'textures & patterns',
            id: '3330445'
        },
        {
            title: 'nature',
            id: '3330448'
        },
        {
            title: 'people',
            id: '3356568'
        },
        {
            title: 'unsplash editorial',
            id: '317099'
        },
    ];

    return (
        <div className="HeaderCategory">
            <div className="links">
                <div className="link" onClick={() => {
                    navigate('/random');
                }}>
                    <div className="txt">random</div>
                </div>
                {
                    _.map(bigCategory, (bCate, i) =>
                        <div className="link" key={i} onClick={() => {
                            navigate(`/collections/${bCate.id}/${makeADash(bCate.title)}/bCate`);
                        }}>
                           <div className="txt">{bCate.title}</div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(HeaderCategory);