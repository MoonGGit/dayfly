import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setThemeName } from '../actions/theme'

const ThemeButton = props => {
    useEffect(() => {
        // 유저 정보 있을 시
        // props.setTheme('white')
    })

    let handleOnChange = (e) => {
        e.stopPropagation();
        if(e.target.checked){
            props.setThemeName('black');
        }else{
            props.setThemeName('white');
        }
    }

    return (
        <input type="checkbox" onChange={handleOnChange} checked={ props.theme && props.theme.themeName === 'black'? true : false}/>
    )
}

let mapStateToProps = (state) => {
    const { theme } = state.themeReducer;
    return {
        theme : theme
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setThemeName: (themeName) => dispatch(setThemeName(themeName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);