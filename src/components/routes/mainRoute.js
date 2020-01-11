import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import CustomRoute from '../customRoute';

const StyledCustomRoute = styled(CustomRoute)`
    text-align: center;
    .content-title {
        text-align: left;
        margin-left: 2%;
    }
    
`;

function createRoutes(routes){
    return routes.map((route, i) => {
        return route.routes? createRoutes(route.routes) : (
                <StyledCustomRoute key={i} {...route} />
        )
    })
}

const MainRouteDiv = styled.div`
    
`;

export default () => {
    return(
        <MainRouteDiv>
            <Switch>
                {createRoutes(routes)}
            </Switch>
        </MainRouteDiv>
    )
}