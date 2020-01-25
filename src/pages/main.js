import { connect } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import MainHeader from '../containers/header/mainHeader';
import MainContent from '../containers/contents/mainContent';
//import StyledMainFooter from '../containers/footer/mainFooter'

import GlobalStyle from '../styles/globalStyling';

const AppBackground = styled.div`
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 70%, #090a0f 100%);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -1;
`;

const ThemeWrapper = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    width: 85%;
    min-height: 100%;
    margin: auto;
    font-size: 20px;
    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 15px;
    }
`;

const MainApp = styled.div``;

const Main = props => {
    return (
        <Router>
            <GlobalStyle />
            <ThemeProvider theme={props.theme}>
                <AppBackground />
                <ThemeWrapper>
                    <MainApp>
                        <MainHeader />
                        <MainContent />
                        {/* <StyledMainFooter />  */}
                    </MainApp>
                </ThemeWrapper>
            </ThemeProvider>
        </Router>
    );
};

let mapStateToProps = ({ themeReducer }) => {
    return {
        theme: themeReducer.theme,
    };
};

export default connect(mapStateToProps, null)(Main);
