import React, { Component } from 'react';
import styled from 'styled-components';
import seulgi1 from '../assets/images/seulgi1.jpg';
import seulgi2 from '../assets/images/seulgi2.jpg';
import seulgi3 from '../assets/images/seulgi3.jpg';

const imgUrl = [
    seulgi1,
    seulgi2,
    seulgi3,
    'https://www.youtube.com/embed/dRfIfpKLvXA',
    'https://www.youtube.com/embed/uR8Mrt1IpXg',
];

const $frameWidth = '96%';
const $frameHeight = '96%';
const $iframeHeight = '500px';

const FrameWrapper = styled.div`
    margin: 0 auto;
    width: 500px;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: Math.floor(Math.random() * 10) % imgUrl.length,
        };
        this.handleOnDragEnd = () => {
            this.setState({
                index: Math.floor(Math.random() * 10) % imgUrl.length,
            });
        };
    }

    render() {
        return (
            <FrameWrapper onDragEnd={this.handleOnDragEnd} onDrag={this.handleOnDragEnd}>
                {this.state.index <= 2 ? (
                    <img
                        onDragEnd={this.handleOnDragEnd}
                        src={imgUrl[this.state.index]}
                        height={$frameHeight}
                        width={$frameWidth}
                    ></img>
                ) : (
                    <iframe
                        onDragEnd={this.handleOnDragEnd}
                        width={$frameWidth}
                        height={$iframeHeight}
                        src={imgUrl[this.state.index]}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </FrameWrapper>
        );
    }
}

export default View;
