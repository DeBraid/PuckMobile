import React, { Component } from 'react';

class ListOfSkaters extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: props.list,
      metric: props.metric,
      title: props.title,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list, 
      metric: nextProps.metric ,
      title: nextProps.title ,
    })
  }
  render() {
    let {list, metric, title} = this.state;
    return (
      <div>
        <span style={{ fontSize: '24px' }}>{title}</span>
        <ol>
          {list.map((item,key,)=>{
            return (
              <li key={key}>
                {item.name}: {item[metric]} 
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ListOfSkaters;
