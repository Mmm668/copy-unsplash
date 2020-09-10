import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {navigate} from "../../helpers/HistoryHelper";
import {BASE_LINE} from "../../helpers/ConstsHelper";

const Container = styled.div`
position: fixed;
z-index: 30000;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #fff;
background-position: 50% 50%;
-webkit-background-size: cover;
background-size: cover;
background-repeat: no-repeat;
background-image: url(https://images.unsplash.com/gifs/weird/weird-14.gif);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:before{
content: '';
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,.4);
}

.inner-wrap{
position: relative;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
svg{
margin-bottom: 20px;
cursor: pointer;
}
.txt{
font-size: 18px;
color: rgba(255,255,255,.8);
}
.btn-home{
margin-top: 15px;
padding: 6px 10px;
-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
background: rgba(255,255,255,.8);
font-size: 15px;
font-weight: 400;
color: rgba(0,0,0,.6);
}
`;


function NotFound (props) {
  const {} = props;
  
  return (
          <Container className="NotFound">
           <div className="inner-wrap">
               <svg className="_2m4hn" onClick={() => navigate('/')}
                    version="1.1" viewBox="0 0 32 32" width="32" height="32"
                    aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash
                   Home</title>
                   <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
               </svg>
               <div className="txt">Hm, the page you were looking for doesn't seem to exist anymore.</div>
               <div className="btn-home" onClick={() => navigate('/')}>Back to Unsplash</div>
           </div>
          </Container>
      )
}

export default NotFound;
