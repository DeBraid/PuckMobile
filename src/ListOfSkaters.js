import React, { Component } from 'react';

class ListOfSkaters extends Component {
  constructor(props){
    super(props);
    this.state = {
      skaters: []
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      skaters: nextProps.skaters 
    })
  }
  render() {
    let {skaters} = this.state;
    return (
      <div>
        {skaters.map((skater,key)=>{
          <span key={key}>
            {skater.name}
          </span>
        })}
      </div>
    );
  }
}

export default ListOfSkaters;
