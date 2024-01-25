import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      College: props.college,
      dep: props.dep,
      img: props.logo
    };
  }

  changeState = () => {
    this.setState({
      College: "Kongu Engineering College"
    });
  };

  mouseover = () => {
    // Update the img state when the image is hovered over
    this.setState({
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-J4Od2tXiujJYCLa5KkLijkUoDvxv_fFDenWjwYEKm2nNiUZMmKuEbAOjLYsNsjwfRo&usqp=CAU" // Replace "new-image-url.jpg" with the actual new image URL
    });
  };
  mouseleave=()=>{
    this.setState({
      img:this.props.logo
    })
  }
  render() {
    return (
      <div>
        <h1>This is state component</h1>
        <h2>
          I am {this.state.name}, I am studying in {this.state.College} in the
          field of {this.state.dep}
        </h2>
       
        <img src={this.state.img} alt="logo" onMouseOver={this.mouseover} onMouseLeave={this.mouseleave} /><br></br><br></br>
        <button onClick={this.changeState}>Submit</button>
      </div>
    );
  }
}

export default State;
