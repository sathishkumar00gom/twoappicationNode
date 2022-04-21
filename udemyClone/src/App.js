import React from 'react'
import SideBar from './componets/SideBar'
//import SideBar from './componets/SideBar'
//import './App.css'
class App extends React.Component{
  constructor(props){
    console.log("initialzed")
    super(props)
  }

  render(){
    return(
      <>
      <LifeCycleApp/>
      </>
    )
  }
}



//getderivedstatefrom props methods
/*
export class GetDeriveds extends React.Component{
  constructor(props){
    super(props)
    this.state={
      names:"constructor method"
    }
  }
  static getDerivedStateFromProps(props, state) {
    return {names: props.nameFromParent} 
  }
  render(){
    return (
      <div>
        hai props is changed {this.state.names}
      </div>
    )
  }
}

export class LifeCycleApp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <GetDeriveds nameFromParent="get derived state from props"/>
      </div>
    )
  }
}*/

//shouldCOmponentupdate method this going to say a before the state or props update we will stop it.
/*export class LifeCycleApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"constructor method"
    }
    console.log("initialized")
  }
  shouldComponentUpdate(){
    return false;
  }
  componentDidMount(){
    console.log("after rendered called component did mount")
    this.setState({name:"component did mount updated"})
    // setTimeout(()=>{
    //   this.setState({name:"component did mount updated"})
    // },5000)
  }
  render(){
    console.log("rendered")
    return(
      <div>
        {this.state.name}
      </div>
    )
  }
}*/

// export class LifeCycleApp extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       name:"constrctor method"
//     }
//     console.log("initialized")
//   }
//   componentDidMount(){
//     this.setState({name:"compoent did mount method"})
//     console.log("i am inside didmount method")
//   }
//   getSnapshotBeforeUpdate(prevProps,prevState){
//     console.log("previous state",prevState.name)
//     console.log("inside snapshot current state",this.state.name)
//   }
//   componentDidUpdate(){
//     console.log("after didmounted current state",this.state.name)
//   }
//   render(){
//     console.log("after initialize i rendered")
//     return(
//       <>
//       <div>
// {this.state.name}
//       </div>
//       </>
//     )
//   }
// }
export class LifeCycleApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"from previous state"  
    }
    console.log("initilized")
  }
  componentDidMount(){
    this.setState({name:"to current state"})
    console.log(" i am in component is did mounted")
  }
  componentDidUpdate(prevState,prevProps){
    if(prevState.name!==this.state.name){
      console.log("yes the state is changed")
    }
  }  
  render(){
    console.log("rendered to component")
    return(
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default App;

