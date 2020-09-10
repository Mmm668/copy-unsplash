import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";

const Container = styled.div`
position: absolute;
  z-index: 15000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: none;
  justify-content: center;
  align-items: center;
  img{
    display: flex;
    height: 140px;
  }
    ${props => {
    if (props.toggle) {
        return `
          display: flex;
      `;
    } else {
        return `
          display: none;

      `;
    }
}}
`;

function PreLoader(props) {
    const {
        isLoading
    } = props;

    return (
        <Container toggle={isLoading}>
            <img src="https://flevix.com/wp-content/uploads/2019/07/Ring-Loading.gif" alt=""/>
        </Container>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(PreLoader);