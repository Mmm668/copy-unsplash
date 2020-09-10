import React, { useState, useEffect } from 'react';
import {navigate} from "../../helpers/HistoryHelper";

function Footer (props) {
  
  const {} = props;
  
  return (
          <div className="Footer">
              <svg className="_2m4hn" onClick={() => navigate('/')}
                   version="1.1" viewBox="0 0 32 32" width="32" height="32"
                   aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash
                  Home</title>
                  <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>

              <p>Make something awesome</p>
          </div>
      )
}

export default Footer;