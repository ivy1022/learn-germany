import React from 'react';


class Phrase extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = 'start!';
  // }

  handleClick() {
    this.setState({});
  }
  
  render() { 
    const words = [
      {gn:'Das ist nicht mein Bier.', litterally: 'That is not my beer.', meaning:'I’m not interested; I don’t like it.'},
      {gn:'Drück mir die Daumen.', litterally: 'Press your thumbs for me!', meaning:'Wish me luck!'},
      {gn:'Wir sind ja nicht aus Zucker.', litterally: 'We’re not made of sugar.', meaning:'Don’t be a wimp. The rain can’t hurt you!'},
      {gn:'Du gehst mir auf den Keks', litterally: 'You’re walking on my cake/cookie', meaning:'You are annoying me'},
      {gn:'Jetzt haben wir den Salat', litterally: 'Now we have the salad', meaning:'Now everything is a mess'},
      {gn:'Tut mir leid, aber mein Englisch ist under aller Sau', litterally: 'Sorry but my English is under all pig', meaning:'Sorry, but my English is just the worst'},
      {gn:'	Du bist so ein Angsthase', litterally: 'You are such a fear-rabbit', meaning:'You are so easily scared'},
      {gn:'Niemand kann mir das Wasser reichen', litterally: 'No one can reach me the water', meaning:'Nobody is better than me'},
      {gn:'Komm schon, spring über deinen Schatten', litterally: 'Come on, jump over your shadow', meaning:'Get out of your comfort zone'}
    ];
    const mapWords = words[Math.floor( Math.random() * words.length)];

    return (
      <div className="phrase-box">
        Today's German phrase
        <h1>"{ mapWords.gn }"</h1> is litterally
        <h2>"{ mapWords.litterally}"</h2> meaning
        <h2>"{ mapWords.meaning }"</h2>
        <button className="Button-style" onClick = {() => {
          this.handleClick();
        }}> next!</button>
      </div>
  );
  }
}
 
export default Phrase;

