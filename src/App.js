import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import reducer from './reducers/index';
import Main from './pages/main'

const store = configureStore(reducer, {});
const App = ()=> {  
    console.log(store.getState())
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}
export default App;