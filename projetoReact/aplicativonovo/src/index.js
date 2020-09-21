import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';


// function tick(){
  
// const name ='andré';
//   const element = ( 
    
//     <div>
//       <h1>hello world</h1>
//       <h2>it is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//     <h1> Bom dia {name}</h1>;
//   );

//   ReactDOM.render( element,document.getElementById('root'));
// }
// setInterval(tick,900);
function formatName(user){
  return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname:'André',
  lastname:'ramos',
}
// const element = (
//   <h1>bom dia {formatName(user)}!</h1>
// );
function getgreeting(user){
  if(user){
   return <h1>olá {formatName(user)}</h1>
  }
  return <h1> olá estranhos</h1>
}
ReactDOM.render(getgreeting(user),document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
