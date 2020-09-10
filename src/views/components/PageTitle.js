import React, { useState, useEffect } from 'react';

function PageTitle (props) {

  const {
      title = '',
      msg = '',
      link = '',
      linkTxt = '',
      children
  } = props;

  return (
          <div className="PageTitle">
              <div className="container">
                  <div className="title">{title}</div>
                  <div className="msg">
                      {msg}
                      { link.length > 0 && <a href={link}>{linkTxt}</a>}
                  </div>
                  {children}
              </div>
          </div>
      )
}

export default PageTitle;