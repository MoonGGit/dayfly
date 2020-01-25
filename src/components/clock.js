import React, { useEffect } from 'react';
// useState의 state가 변경 시 해당 컴포넌트가 재렌더링 됨, 같은 값 입력 설정 시 렌더안됨
import { connect } from 'react-redux';
import { setCurrentTime } from '../actions/clock';

let mapStateToProps = state => {
    const { currentTime } = state.clockReducer;
    return {
        currentTime: currentTime,
    };
};

let mapDispatchToProps = dispatch => {
    return {
        setCurrentTime: date => dispatch(setCurrentTime(date)),
    };
};

// Clock의 자식(Subscribe)
const ClockSpan = connect(
    mapStateToProps,
    null,
)(props => {
    return <span>{props.currentTime.toLocaleTimeString()}</span>;
});

// Clock의 부모(Dispatch)
const Clock = ({ className, ...props }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            props.setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className={className}>
            <ClockSpan />
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Clock);
