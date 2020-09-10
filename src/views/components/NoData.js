import React, { useState, useEffect } from 'react';

function NoData (props) {

  const {
      img = '',//local 경로?
      msg = '결과 없습니다.'
  } = props;

  return (
          <div className="NoData">
              <i className="material-icons">directions_run</i>
              <div className="msg">
                  {msg}
              </div>

          </div>
      )
}

export default NoData;