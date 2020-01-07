import React from 'react';
import CustomLink from '../customLink';
import styled, {keyframes} from 'styled-components';
import routes from './routes';


const selectedKeyFrames = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const StyledCustomLink = styled(CustomLink)`
    &.active span{
        display: inline-block;
        animation: ${selectedKeyFrames} 2s linear infinite;
    }
    a {
        text-decoration: none;
        color: palevioletred;

        &:hover{
            text-decoration: underline;
        }
    }
    text-align: left;
    width: 250px;
`;

const SubNavDiv = styled.div`
    & > a {
        color: palevioletred;
    }
    & > span {
        color: palevioletred;
        display : block;
    }
    ${StyledCustomLink} {
        display: none;
    }
    &:hover, &:active{
        ${StyledCustomLink} {
            display: block;
        }
    }
    width: 200px;
    text-align: left;
`;

const MainNavContainer = styled.div`
    display: inline-flex;
    float: left;
`


function createNav(routes, deep){
    return routes.map((route, i) => {
        return route.subNav ? (
                <SubNavDiv key={i} deep={deep}>
                    <span>
                        {route.label}
                    </span>
                    <div>
                        {createNav(route.subNav, ++deep)}
                    </div>
                </SubNavDiv>
            ) : (
                <StyledCustomLink key={i} to={route.path} label={route.label} exact={route.exact} deep={deep}
                    selectedMark={" ⭐ "} watingMark=" ‣ "
                />
            );
        });
    };

export default () => <MainNavContainer>{createNav(routes, 0)}</MainNavContainer>