import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// import { counter } from './index.redux'
import reducers from './reducer'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config.js'
import 'antd-mobile/dist/antd-mobile.css'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


class Test extends React.Component {
  render() {
    console.log(this.props)
    return (
      <h2>测试{this.props.match.params.location}</h2>
    )
  }
}

/**
 * 登录
 *  没有登录信息 统一跳login
 * 
 * 页面 导航+显示+注销
 *  一营 二营 骑兵连
 * 
 * router+redux
 */

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* 只渲染命中的第一个route */}
        <Route path='/login' exact component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
      
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)



// // 通过reducer建立
// // 根据老的state和action 生成新的state
// function counter(state = 0, action) {
//   switch (action.type) {
//     case ADD_GUN:
//       return state + 1
//     case SUBTRACT:
//       return state - 1
//     default:
//       return 10
//   }
// }

// // 1.新建store
// const store = createStore(counter)

// // 2.
// const init = store.getState()
// console.log(init)

// // 4.监听
// function listener() {
//   const current = store.getState()
//   console.log(`现在有机枪${current}把`)
// }
// // 5.订阅 每次修改狗重新渲染
// store.subscribe(listener)

// // 3.派发事件 传递action
// store.dispatch({ type: ADD_GUN })
// console.log(store.getState())