import React, {useState, useEffect} from 'react';
import FetchHelper from "../../helpers/FetchHelper";
import Action from "../../redux/action";
import {connect} from "react-redux";
import {navigate} from "../../helpers/HistoryHelper";

function SearchBar(props) {

    const {
        placeholder = 'Search free high-resolution photos',
        keyword,
        dispatch,
    } = props;


    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(keyword)
    },[keyword]);

    return (
        <div className="SearchBar">
            <i className="material-icons"
            onClick={() => {
                navigate(`/search/photos/${value}`)
                dispatch(Action.Creators.updateState({keyword: value}))
            }}>search</i>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    // dispatch(Action.Creators.updateState({keyword: value}))
                }}
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        navigate(`/search/photos/${value}`);
                        dispatch(Action.Creators.updateState({keyword: value}))
                    }
                }}
            />
        </div>
    )
}

export default connect((state => ({...state})), (dispatch => ({dispatch})))(SearchBar);