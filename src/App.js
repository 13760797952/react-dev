// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;



import React from 'react'
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
class App extends React.Component{
  render(){
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团,团长是{boss}</h2>
        <First dalao="张大喵"></First>
        <Drives dalao="孙德胜"></Drives>
      </div>
    )
  }
}

function Drives(props ){
  return <h2>骑兵连连长,{props.dalao}</h2>
}

class First extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      solders:['老虎','柱子','鸭蛋']
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  // 生命周期
  componentWillMount(){
    console.log('组件马上就要加载了')
  }
  componentDidMount(){
    console.log('组件加载完毕')
  }
  addSolder(){
    this.setState({
      solders:[...this.state.solders,'新兵'+Math.ceil(Math.random()*100)]
    })
  }
  render(){
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长,{this.props.dalao}</h2>
        <Button type="primary" onClick={()=>this.addSolder()}>新兵入伍</Button>
        <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}


export default App
