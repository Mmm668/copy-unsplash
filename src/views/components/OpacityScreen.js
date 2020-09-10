import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
  z-index: 15001;
    //position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.4);
`;

function OpacityScreen(props) {


    const {} = props;

    return (
        <Container/>
    )
}

export default OpacityScreen;