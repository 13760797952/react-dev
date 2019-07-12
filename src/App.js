import React from 'react'
import {connect} from 'react-redux'
import {addGun,subtract,addGunAsync} from './index.redux'


@connect(
  // 你要state什么属性放到props里
  state=>({num:state.counter}),
  // 你要什么方法，放到props里，自动dispatch
  {addGun,subtract,addGunAsync}
)
class App extends React.Component{
  render(){
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.subtract}>上缴武器</button>
        <button onClick={this.props.addGunAsync}>拖2天再给武器</button>
      </div>
    )
  }
}


// App = connect(mapStateProps,actionCreators)(App)
export default App