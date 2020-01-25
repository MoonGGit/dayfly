import React from 'react';
import styled from 'styled-components';
import ThemeButton from '../../components/themeButton';
import Clock from '../../components/clock';
import MainNavigator from '../../components/routes/mainNavigator';

const $headerUpperHeight_window = '80';
const $headerUpperHeight_mobile = '40';

const MainLogo = styled.div`
    display: inline-block;
    color: mediumaquamarine;
    text-decoration: none;
`;

const MainHeader_Upper = styled.div`
    width: 100%;
    height: ${$headerUpperHeight_window + 'px'};

    /* 마진병합(block)으로 사용함, inline이면 마진 먹힘 */
    ::before {
        content: '';
        display: block;
        padding-top: 15px;
        /* height로 줘도 됨ㅎㅎ */
    }

    @media screen and (max-width: 600px) {
        height: ${$headerUpperHeight_mobile + 'px'};
        &::before {
            padding-top: 10px;
        }
    }
`;

const MainHeaderWrapper = styled.div`
    text-align: center;
`;

const StyledClock = styled(Clock)`
    @media screen and (max-width: 600px) {
        display: inline-block;
    }
`;

const MainHeader = () => {
    return (
        <MainHeaderWrapper>
            <MainHeader_Upper>
                <ThemeButton /> 리액트 (＃°Д°)
                <MainLogo as="a" href="/">
                    Home
                </MainLogo>
                <StyledClock />
            </MainHeader_Upper>
            <MainNavigator />
        </MainHeaderWrapper>
    );
};

export default MainHeader;
