import { connect } from'react-redux';
import React from 'react';
import { BrowserRouter as Router } from'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import MainHeader from '../containers/header/mainHeader'
import MainContent from '../containers/contents/mainContent'
//import StyledMainFooter from '../containers/footer/mainFooter'

import GlobalStyle from '../styles/globalStyling'

const AppBackgroundDiv = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    width: 100%;
    min-height: 100%;
`;

const MainApp = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

const Main = props => {
    return(
        <Router>
            <GlobalStyle />
            <ThemeProvider theme={props.theme}>
                <AppBackgroundDiv>
                    <MainApp>
                        <MainHeader />
                        <MainContent />
                        {/* <StyledMainFooter />  */}
                    </MainApp>
                </AppBackgroundDiv>
            </ThemeProvider>
        </Router>
    )
}

let mapStateToProps = ({ themeReducer }) => {
    return{
        theme : themeReducer.theme
    }
}

export default connect(mapStateToProps, null)(Main);

