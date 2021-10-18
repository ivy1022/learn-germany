import React from 'react';


class Phrase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {phrase: 'Ja!'};
  }
  
  render() { 
    const germans = ['ja', 'danke', 'thus'];
    const oneGerman = germans[Math.floor( Math.random() * germans.length)];
    return (
      <div className="phrase-box">
        <h2>Today's German phrase</h2>
        <h1>{ oneGerman }</h1>
        <button onClick = {() => {
          // this.handleClick
        }}> next</button>
      </div>
  );
  }
}
 
export default Phrase;

