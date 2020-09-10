import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import NoData from "../../components/NoData";
import SearchTab from "../../components/SearchTab";

function Search(props) {

    const {
    } = props;

    return (
        <div className="Search">
            <SearchTab></SearchTab>
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);
