import React, { useState, useEffect } from 'react';
import cn from "classnames";
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background:rgba(0,0,0,0.26);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ShareContents = styled.div`
    color:#fff;
    font-size: 100px;
`;

function SharePopup (props) {

  const {} = props;

  return (
          <Container className="SharePopup">
              <ShareContents>share</ShareContents>
          </Container>
      )
}

export default SharePopup;
