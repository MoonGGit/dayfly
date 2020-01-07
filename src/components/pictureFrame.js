const imgUrl = [
  'src/assets/images/seulgi1.jpg',
  'src/assets/images/seulgi2.jpg',
  'src/assets/images/seulgi3.jpg',
]

  export default class View extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        index: Math.ceil(Math.random()*10) % imgUrl.length
      }
    }
    onDragEnd = () => {
      this.setState({
        index: Math.ceil(Math.random()*10) % imgUrl.length
      })
    };
    
    render(){
      if(this.state.index == 0){
        return(
          <div className="main">
         <img className="main-content" onDragEnd={this.onDragEnd} src={imgUrl[this.state.index]} height={500 + "px"} weight={500 + "px"}>
          </img>
            </div>
        )
      }else{
        return(
          <div className="main" onDragEnd={this.onDragEnd} onDrag={this.onDragEnd}>
          <iframe className="main-content" onDragEnd={this.onDragEnd} width="500" height="500" src="https://www.youtube.com/embed/dRfIfpKLvXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        )
      }
    }
  }