import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";
import NoData from "../../components/NoData";
import {connect} from "react-redux";

function Users (props) {

  const {
      searchPhotos = []
  } = props;

  return (
          <div className="Users">
              {
                  searchPhotos.length > 0 ?
                      <Photos photos={searchPhotos}/> :
                      <NoData/>
              }
          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Users);
