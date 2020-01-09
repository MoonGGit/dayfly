import React from 'react';
import styled from 'styled-components';
import MainRoute from '../../components/routes/mainRoute';


const MainDiv = styled.div`
    text-align: center;
`;

const MainContent = () => {
    return(
        <MainDiv>
            <MainRoute />
        </MainDiv>
    )
}



export default MainContent;