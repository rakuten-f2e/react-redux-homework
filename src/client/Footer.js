import React from 'react'

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div className="footer">
        <hr />
        <footer className="footer__container">
          <p>Contribute by Li-Hsuan Hsieh</p>
          <p>E-mail: <a href="mailto:ss77995ss@gmai.com">ss77995ss@gmail.com</a></p>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </footer>
      </div>
    ); 
  }
}

export default Footer;