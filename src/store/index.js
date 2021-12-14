// 这是仓库store

// 1.导入需要使用的成员
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// 导入redux-thunk
import thunk from 'redux-thunk'

import counter from './Reducers/counter'
import global from './Reducers/global'


// 4.产生仓库
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(

  // 合并多个reducer
  combineReducers({
    counter,
    global
  }),

  // 应用中间件
  composeEnhancers(applyMiddleware(thunk))
)

// 5.导出仓库
export default store
