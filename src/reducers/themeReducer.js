import { SET_THEME_NAME } from '../actions/theme';

let theme = {
    white:{
        themeName: 'white',
        background: 'ghostwhite',
        color: 'black'
    },
    black :{
        themeName: 'black',
        background: '#212529',
        color: 'snow'
    }
}

let initState = {
    theme: {...theme.white}
}

const themeReducer = (state = initState, action) =>{
  switch(action.type){
    case SET_THEME_NAME:
        return Object.assign({}, state, {
            theme: theme[action.themeName]
        });
    default:
      return state;
  }
}

export default themeReducer;