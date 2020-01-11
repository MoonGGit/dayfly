import React from 'react';
import CustomLink from '../customLink';
import Hamburger from '../hamburger';
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
    margin-left: ${props=>props.deep != 0 ? 20 : 0}px;
    text-align: left;
    width: 150px;
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
`;

const SubNavDiv = styled.div`
    text-align: left;
    width: 150px;
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
        cursor: pointer;
        ${StyledCustomLink} {
            display: block;
        }
    }
    & > div {
        position: absolute;
    }
    
`;

const Nav = styled.div`
    display: inline-flex;
    margin-top: 2px;
    @media screen and (max-width: 600px){
        display: none;
        position: absolute;
        width: 100%;
        height: 94%;
    }

`;

const StyledHamburger = styled(Hamburger)`
    display: none;
    cursor: pointer;
    @media screen and (max-width: 600px){
        display: inline-block;
    }
`;

const MainNavDiv = styled.div`
    background: grey;
    text-align: right;
    height: 30px;
    border-radius: 5px;
    @media screen and (max-width: 600px){
        text-align: left;
    }
`;

function createNav(routes, deep){
    return routes.map((route, i) => {
            return route.routes ? (
                    <SubNavDiv key={i}>
                        <span>
                            {route.label}
                        </span>
                        <div>
                            {createNav(route.routes, ++deep)}
                        </div>
                    </SubNavDiv>
                ) : (
                    <StyledCustomLink key={i} to={route.path} label={route.label} exact={route.exact} deep={deep}
                        selectedMark={" ⭐ "} watingMark=" ‣ "/>
                );
            })
    };

export default () => (
    <MainNavDiv>
        <StyledHamburger label="🍔" onClick={(event)=>{
            event.target.style.display= "none";
            let navEl = document.getElementById("mainNav");
            navEl.style.display = navEl.style.display ? "" : "block";
        }}/>
        <Nav id="mainNav">
            {createNav(routes, 0)}
        </Nav>
    </MainNavDiv>
    )