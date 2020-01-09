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
const MainHeader = ({ className }) => {
    return(
        <div className={className}>
            <ThemeButton /> 리액트 (＃°Д°) 
            <MainLogo as="a" href="/">Home</MainLogo>
            <Clock />
            <MainNavigator />
        </div>
    )
        
}

const StyledMainHeader = styled(MainHeader)`
        text-align: center;
        width: 85%;
        margin: 0 auto;
        @media screen and (max-width: 600px){
            width: 100%;
        }
`;
    
export default StyledMainHeader;
