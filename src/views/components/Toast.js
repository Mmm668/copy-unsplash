import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 20000;
  bottom: 70px;
  left: 50%;
  -webkit-transform: translate(-50%,0);
  -moz-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  -o-transform: translate(-50%,0);
  transform: translate(-50%,0);
  padding: 11px 30px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: #17a8f1;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  //color: $white;
`;

function Toast(props) {
    const {
        message
    } = props;

    return (
        <Container>
            {message}
        </Container>
    )
}

export default Toast;
