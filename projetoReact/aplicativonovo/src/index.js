import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';

//EXEMPLO 1
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

// EXEMPLO 2

// function formatName(user){
//   return user.firstname + ' ' + user.lastname;
// }

// const user = {
//   firstname:'André',
//   lastname:'ramos',
// }
// // const element = (
// //   <h1>bom dia {formatName(user)}!</h1>
// // );
// function getgreeting(user){
//   if(user){
//    return <h1>olá {formatName(user)}</h1>
//   }
//   return <h1> olá estranhos</h1>
// }
// ReactDOM.render(getgreeting(user),document.getElementById('root'));


//EXEMPLO 3

// function Welcome (props){
//   return <h1> olá, {props.name}</h1>
// }
//   function Appjs(){
//     return (
//       <div>
//         <Welcome name="andré"/>
//         <Welcome name="joao"/>
//         <Welcome name="wagner"/>
//       </div>
//     )
//   }

// ReactDOM.render(<Appjs />, document.getElementById('root'));

// exeplo 4

// function FormatDate(date){
//   return date.toLocaleDateString();
// }

// function Comment (props){
//   return (
//     <div className="comment">
//       <div className= "userinfo">
//         <img
//           className="avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//           />
//         <div className="userinfoName">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="comment-text">{props.text}</div>
//       <div className="comment-date">{FormatDate(props.date)}</div>
//     </div>
//   )
// }

// const comment = {
//   date: new Date(),
//   text: "aula de react",
//   author: {
//     name:'andre',
//     avatarUrl:'logo512.png',
//   },
// }

// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text= {comment.text}
//     author ={comment.author}
//     />,
//  document.getElementById('root'));

// exemplo 5


// function sum(a,b){
//   return (a+b)
// }

// function sub(a,b){
//   return (a-b)
// }

// function subandsum(a,b,c,d){
//   return (
//     sum(a,b),
//     sub(c,d)
//   );
// }

// ReactDOM.render(
//   subandsum(4,8,4,8),
//   document.getElementById('root'));

// exemplo 6

// class Car extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       marca:'Ford',
//       carro: 'ka',
//       cor: 'azul',
//       ano: 2008,
//     };
//   }

//     changeColor = () =>{
//       this.setState({cor:"vermelho"})
//     }
//   render(){
//     return (
//       <div>
//         <h1>Meu Carro é {this.state.marca} {this.state.carro}</h1>
//         <p> Ele é {this.state.cor} de {this.state.ano}</p>
//         <button onClick={this.changeColor}>outra cor</button>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Car />,
    document.getElementById('root')
);











 
 // em tese letra minuscula é cosntante e letra maisucula é objeto

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
