import React from 'react';
import CustomLink from '../customLink';
import Hamburger from '../hamburger';
import styled, { keyframes } from 'styled-components';
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
    text-align: left;
    width: 160px;
    &.active span {
        display: inline-block;
        animation: ${selectedKeyFrames} 2s linear infinite;
    }
    a {
        text-decoration: none;
        color: palevioletred;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const SubNavDiv = styled.div`
    display: block;
    text-align: left;
    min-width: 160px;
    cursor: pointer;

    & > a,
    & > span:nth-child(2) {
        color: palevioletred;
    }
    & > div {
        margin-left: 20px;
        display: none;
        position: absolute;

        div {
            position: initial;
        }
    }

    > span:first-child {
        display: inline-block; // 블록만 먹힘
        transition: all 0.4s; // 등록한 트랜스폼 실행
    }
    &.active {
        > div {
            display: block;
        }
        > span:first-child {
            transform: rotate(90deg); // 액션에 따른 동작지정
        }
    }

    @media screen and (max-width: 600px) {
        > div {
            position: inherit;
        }
        cursor: none;
    }
`;

const Nav = styled.div`
    display: inline-flex;
    margin-top: 2px;
    font-size: 20px;

    @media screen and (max-width: 600px) {
        display: block;
        position: fixed;
        border-radius: 0 40px 40px 0;
        width: 100%;
        height: 95%;
        background: #d1e1ef;
        margin-top: 0px;
        right: 100%;
        transition: all 0.8s;
        opacity: 0.2;

        &.active {
            right: 0px;
            opacity: 1;
        }
    }
`;

const NavCloser = styled.div`
    display: none;
    @media screen and (max-width: 600px) {
        display: block;
        width: 40px;
        text-align: center;
        font-size: 40px;
        position: absolute;
        top: 5px;
        right: 15px;
    }
`;

const NavBackground = styled.div``;

const StyledHamburger = styled(Hamburger)`
    position: absolute;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        display: inline-block;
        font-size: 20px;
    }
`;

const MainNavDiv = styled.div`
    background: grey;
    text-align: right;
    height: 30px;
    border-radius: 5px;
    @media screen and (max-width: 600px) {
        text-align: left;
        border-radius: unset;
    }
`;

function createNav(routes, deep = 0, index) {
    return routes.map((route, i) => {
        return route.routes ? (
            <SubNavDiv
                id={`Menu-${index || i}-${deep}`}
                key={i}
                onClick={e => {
                    let subMenuDiv = document.getElementById(`Menu-${index || i}-${deep}`);
                    subMenuDiv.classList.toggle('active');
                    e.stopPropagation();
                }}
            >
                <span>‣&nbsp;</span>
                <span>{route.label}</span>
                <div>{createNav(route.routes, deep + 1, index || i)}</div>
            </SubNavDiv>
        ) : (
            <StyledCustomLink
                key={i}
                to={route.path}
                label={route.label}
                exact={route.exact}
                selectedMark={' ⭐ '}
                watingMark=" ‣ "
                onClick={e => {
                    console.log('링크 눌림');
                    console.log('index : ', index);
                    console.log('deep', deep);
                    // 모바일
                    let navEl = document.getElementById('mainMenu');
                    navEl.classList.remove('active');
                    // 윈도우
                    if (deep > 0) {
                        let parentMenuDiv = document.getElementById(`Menu-${index}-0`);
                        parentMenuDiv.classList.toggle('active');
                    }
                    if (deep > 1) {
                        let subMenuDiv = document.getElementById(`Menu-${index}-${deep - 1}`);
                        subMenuDiv.classList.toggle('active');
                    }
                    e.stopPropagation();
                }}
            />
        );
    });
}

export default () => (
    <MainNavDiv>
        <StyledHamburger
            id="menuToggleBtn"
            label="🍔"
            onClick={() => {
                let navEl = document.getElementById('mainMenu');
                navEl.classList.add('active');
            }}
        />
        <Nav id="mainMenu">
            {createNav(routes)}
            <NavCloser
                onClick={e => {
                    e.target.parentElement.classList.remove('active');
                }}
            >
                X
            </NavCloser>
        </Nav>
    </MainNavDiv>
);
