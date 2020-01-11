import React from 'react';
import styled from 'styled-components';
import ThemeButton from '../../components/themeButton';
import Clock from '../../components/clock'
import MainNavigator from '../../components/routes/mainNavigator'

const MainLogo = styled.div`
    display: inline-block;
    color: mediumaquamarine;
    text-decoration: none;
    
`;

const MainHeader_Upper = styled.div`
    width: 100%;
    height: 100%;

`;


const MainHeaderWrapper = styled.div`
        text-align: center;
        @media screen and (max-width: 600px){
            height: 6%
        }
`;

const MainHeader = () => {
    return(
        <MainHeaderWrapper>
            <MainHeader_Upper>
                <ThemeButton /> 리액트 (＃°Д°) 
                <MainLogo as="a" href="/">Home</MainLogo>
                <Clock />
            </MainHeader_Upper>
            <MainNavigator />
        </MainHeaderWrapper>
    )
}

    
export default MainHeader;
