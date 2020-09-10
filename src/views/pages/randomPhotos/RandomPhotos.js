import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";
import PageTitle from "../../components/PageTitle";
import {connect} from "react-redux";
import Action from "../../../redux/action";

function RandomPhotos (props) {

  const {
      dispatch,
      randomPhotos
  } = props;

  useEffect(() => {
     dispatch(Action.Creators.fetchRandomPhotos());
  }, []);
  
  return (
          <div className="RandomPhotos">
              <PageTitle
                  title={'Random Photos'}
                  msg={'Photos spreaded among Unsplash data'}
              />
              <div className="container">
                  <Photos photos={randomPhotos}/>
              </div>
          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(RandomPhotos);