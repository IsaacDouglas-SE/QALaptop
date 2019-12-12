import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

buttonClick(){
console.log("hi");
var data1 = [];
fetch("/ShowAll")
.then(data => data1 = data);
console.log(data1);

}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p> FIFA 20 <code>ULTIMATE TEAM </code>  </p>

                      <div>Douglas productions</div>
                        <div class="grid-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>


  <button type="button"onClick = {this.buttonClick}>Isaac's First Button</button>





                        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  );
}
}
export default App;
