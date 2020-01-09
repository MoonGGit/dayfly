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
    height: 100%;
`;


const Main = props => {
    return(
        <Router>
            <GlobalStyle />
            <ThemeProvider theme={props.theme}>
                <AppBackgroundDiv>
                    <MainHeader />
                    <MainContent />
                    {/* <StyledMainFooter />  */}
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

