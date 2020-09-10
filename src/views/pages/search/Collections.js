import React, {useState, useEffect} from 'react';
import PageTitle from "../../components/PageTitle";
import _ from 'lodash'
import CollectionItem from "../../components/CollectionItem";
import {connect} from "react-redux";
import Action from "../../../redux/action";
import PreLoader from "../../components/PreLoader";

function Collections(props) {

    const {
        dispatch,
        isLoading,
        collections,
    } = props;

    useEffect(() => {
        dispatch(Action.Creators.fetchCollections())
    },[]);

    return (
        <div className="Collections">
            <PageTitle
                title={'Collections'}
                msg={'Explore the world through collections of beautiful photos free to use under the '}
                link={'/'}
                linkTxt={'Unsplash License'}
            />
            <div className="container">
                <div className="collection-wrap" style={{position: 'relative'}}>
                    <PreLoader isLoading={isLoading}/>
                    {
                        _.map(collections, (collection,i) =>
                            <CollectionItem
                                key={i}
                                collection={collection}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Collections);