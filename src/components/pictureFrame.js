import React, { Component } from 'react';
import seulgi1 from '../assets/images/seulgi1.jpg'
import seulgi2 from '../assets/images/seulgi2.jpg'
import seulgi3 from '../assets/images/seulgi3.jpg'

const imgUrl = [
  seulgi1,
  seulgi2,
  seulgi3,
  "https://www.youtube.com/embed/dRfIfpKLvXA",
  "https://youtu.be/uR8Mrt1IpXg"
]

 class View extends Component{
    constructor(props){
      super(props);
      this.state ={
        index: Math.floor(Math.random()*10) % imgUrl.length
      }
      this.handleOnDragEnd = () => {
        this.setState({
          index: Math.floor(Math.random()*10) % imgUrl.length
        })
      };
    }
    
    render(){
      if(this.state.index <= 2){
        return(
          <div className="main">
         <img className="main-content" onDragEnd={this.handleOnDragEnd} src={imgUrl[this.state.index]} height={500 + "px"} weight={500 + "px"}>
          </img>
            </div>
        )
      }else{
        return(
          <div className="main" onDragEnd={this.handleOnDragEnd} onDrag={this.handleOnDragEnd}>
           <iframe className="main-content" onDragEnd={this.handleOnDragEnd} width="500" height="500" src={imgUrl[this.state.index]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        )
      }
    }
  }

  export default View;