import React from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import CustomRoute from '../customRoute';

function createRoutes(routes){
    return routes.map((route, i) => {
        return route.routes? createRoutes(route.routes) : (
            <CustomRoute key={i} {...route} />
        )
    })
}

const MainContentDiv = styled.div`

`;

export default () => {

    return(
        <MainContentDiv>
            <Switch>
                {createRoutes(routes)}
            </Switch>
        </MainContentDiv>
    )
}