import { createStore, compose, applyMiddleware } from 'redux';
import loggerMiddleware from './middlewares/loggerMiddleware';
import thunk from 'redux-thunk';
//

//import { createLogger } from 'redux-logger';        // 일단 킾
//const logger = createLogger();
/* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
   https://github.com/evgenyrodionov/redux-logger#options
*/

export default function configureStore(reducer, initialState = {}) {
    const enhancer = compose(
        applyMiddleware(loggerMiddleware, thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
    return createStore(reducer, initialState, enhancer);
}
