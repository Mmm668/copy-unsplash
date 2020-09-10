import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Action from "../../redux/action";
import cn from 'classnames'
import NoData from "./NoData";
import Photos from "./Photos";
import _ from "lodash";
import CollectionItem from "./CollectionItem";
import {kComma} from "../../helpers/CommonHelper";
import {navigate} from "../../helpers/HistoryHelper";
import UserCard from "./UserCard";

function SearchTab(props) {

    const {
        dispatch,
        isLoading,
        searchResult,
    } = props;

    const T1 = 'photos';
    const T2 = 'collections';
    const T3 = 'users';
    const TYPES = ['photos', 'collections', 'users'];
    const paramType = TYPES[0];

    const [type, setType] = useState(props.match.params.type);
    const keyword = props.match.params.keyword;

    // const heads = [
    //     {
    //         icon: 'insert_photo',
    //         txt: 'Photos',
    //         // val: '45643', //10만 100k
    //         func: dispatch(Action.Creators.fetchSearchPhotos(keyword))
    //     },
    //     {
    //         icon: 'layers',
    //         txt: 'Collections',
    //         func: dispatch(Action.Creators.fetchSearchCollections(keyword))
    //     },
    //     {
    //         icon: 'group',
    //         txt: 'Users',
    //         func: dispatch(Action.Creators.fetchSearchUsers(keyword))
    //     },
    // ];


    useEffect(() => {
        dispatch(Action.Creators.fetchSearch(keyword));
    }, [keyword]); // 비동기통신은 keyword바뀔때만 도니까

    useEffect(()=> {
        setType(paramType)
    }, [paramType]);

    if (!searchResult) {
        return false;
    }

    return (
        <div className="Tab SearchTab">
            <div className="head-wrap">
                <div className={cn("head", {'is-active': type === T1})}
                     onClick={() => {
                         setType(T1);
                         navigate(`/search/${T1}/${keyword}`)
                     }}>
                    <div className="txt">
                        <i className="material-icons">insert_photo</i>
                        Photos {kComma(searchResult.photos.total)}
                    </div>
                </div>
                <div className={cn("head", {'is-active': type === T2})}
                     onClick={() => {
                         setType(T2);
                         navigate(`/search/${T2}/${keyword}`)
                     }}>
                    <div className="txt">
                        <i className="material-icons">layers</i>
                        Collections {kComma(searchResult.collections.total)}
                    </div>
                </div>
                <div className={cn("head", {'is-active': type === T3})}
                     onClick={() => {
                         setType(T3);
                         navigate(`/search/${T3}/${keyword}`)
                     }}>
                    <div className="txt">
                        <i className="material-icons">group</i>
                        Users {kComma(searchResult.users.total)}
                    </div>
                </div>
            </div>

            <div className="cont-wrap">
                <div className="container">
                    <div className="title">{keyword}</div>
                    <div className="related-keywords-wrap">
                        <div className="related-keywords">
                            {
                                _.map((searchResult.related_searches), (keyword, i) =>
                                    <div className='item'
                                         key={i}
                                         onClick={() => {
                                             navigate(`/search/${T1}/${keyword.title}`)
                                         }}>
                                        <div className="txt">{keyword.title}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        type === T1 && <Photos photos={searchResult.photos.results}></Photos>
                        // searchPhotos.results.length > 0) ?  : <NoData/>
                    }
                    {
                        type === T2 &&
                        <div className='collection-wrap'>
                            {
                                _.map(searchResult.collections.results, (collection, i) =>
                                    <CollectionItem
                                        key={i}
                                        collection={collection}
                                    />
                                )
                            }
                        </div>
                    }
                    {
                        type === T3 &&
                        <div className='user-wrap'>
                            {
                            _.map(searchResult.users.results, (user, i) =>
                            <UserCard
                                key={i}
                                user={user}
                            />
                            )}
                        </div>
                    }
                    {
                        searchResult.photos.total === 0 && <NoData msg={'검색 결과가 없습니다.'}/>
                    }
                </div>
            </div>

        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(withRouter(SearchTab));