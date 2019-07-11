import React from 'react'
import {connect} from 'react-redux'
import {addGun,subtract,addGunAsync} from './index.redux'

class App extends React.Component{
  render(){
    const store = this.props.store
    const num = this.props.num
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.subtract}>上缴武器</button>
        <button onClick={this.props.addGunAsync}>拖2天再给武器</button>
      </div>
    )
  }
}

const mapStateProps=(state)=>{
  return {num:state}
}
const actionCreators = {addGun,subtract,addGunAsync}
App = connect(mapStateProps,actionCreators)(App)
export default App