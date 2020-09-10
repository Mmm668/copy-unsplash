import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Action from "../../redux/action";
import _ from 'lodash'

function TagList (props) {

  const {
      dispatch,
      items = []
  } = props;

  return (
          <div className="TagList">
              {
                  _.map(items, (item,i) =>
                      <div className='item'
                           key={i}
                           onClick={() => dispatch(Action.Creators.fetchSearchPhotos(item.title))}
                      >{item.title}</div>
                  )
              }
          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(TagList);