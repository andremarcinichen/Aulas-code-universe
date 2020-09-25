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

// ReactDOM.render(
//   <Car />,
//     document.getElementById('root')
// );

///////////exemplo 7

// class Clock extends React.Component {
//   constructor(props){
//     super(props);//executa o props
//     this.state = {date: new Date()};
//   }
//   componentDidMount(){  // componente do react (função)
//     this.timerID = setInterval(
//       ()=> this.tick(), 1000 // cada 1 segundo usa funçao tick
//     );
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer.ID); 
//   }
//   tick(){
//     this.setState({date:new Date()}); // tick joga o valor
//   }
//   render(){
//     return(
//       <div>
//         <h1>hello world</h1>
//         <h2>agora são{this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <Clock />,
//     document.getElementById('root')
// );

///// exemplo 8

// class Header extends React.Component {
//     constructor(props){
//       super(props);//executa o props
//       this.state = {favoritecolor:"vermelho"};
//     }
//     static getDerivedStateFromProps(props){ /// faz com que valor nao altere
//       return {favoritecolor: props.favcol};
//     }
//     changecolor = () => {
//       this.setState({favoritecolor:"azul"})
//     }
//     render(){
//       return(
//         <div>
//           <h1>hello world</h1>
//           <h2>Minha cor favorita é: {this.state.favoritecolor}</h2>
//           <button onClick={this.changecolor}>Trocar a Cor</button>
//         </div>
//       );
//     }
//   }
//   ReactDOM.render(
//     <Header favcol="amarelo" />,
//       document.getElementById('root')
//   );


// exemplo 9

  // class Header extends React.Component {
  //   constructor(props){
  //     super(props);//executa o props
  //     this.state = {favoritecolor:"vermelho"};
  //   }
  //   shouldComponentUpdate(){  //desabilita site inteiro
  //     return false;
  //   }
  //   changecolor = () => {
  //     this.setState({favoritecolor:"azul"})
  //   }
  //   render(){
  //     return(
  //       <div>
  //         <h1>hello world</h1>
  //         <h2>Minha cor favorita é: {this.state.favoritecolor}</h2>
  //         <button onClick={this.changecolor}>Trocar a Cor</button>
  //       </div>
  //     );
  //   }
  // }
  // ReactDOM.render(
  //   <Header favcol="amarelo" />,
  //     document.getElementById('root')
  // );

  // exemplo 10

  // class Toggle extends React.Component {
  //   constructor (props){
  //     super(props);
  //     this.state = {isToggleOn: false};
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //   handleClick(){
  //     this.setState(prevState => ({
  //       isToggleOn: !prevState.isToggleOn
  //     }));
  //   }
  //   render(){
  //     return (
  //       <div>
  //         <button onClick={this.handleClick}>
  //           {this.state.isToggleOn ? 'ON' : 'OFF'}
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  // ReactDOM.render(
  //   <Toggle />,
  //     document.getElementById('root'));
 
 // em tese letra minuscula é cosntante e letra maisucula é objeto

  //exemplo 111
//  class Football extends React.Component{
//    shoot(a){
//      alert(a);
//    }
//    render (){
//      return(
//        <button onClick={this.shoot.bind(this, 'gol')}> CHUTAR</button>
//      );
//    }
//  }

// ReactDOM.render(
//   <Football />,
//     document.getElementById('root'));

//exemplo  12

//   class Form extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {value: 'teste'};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//       this.setState({value: event.target.value});
//     }
//     handleSubmit(event){
//       alert('Nome: ' + this.state.value);
//       event.preventDefault();
//     }
//     render(){
//       return(
//         <form onSubmit={this.handleSubmit}>
//           <label>Nome: </label>
//           {/* <input type="text" value={this.state.value} onChange={this.handleChange} /><br/> */}
//           {/* <textarea type="text" value={this.state.value} onChange={this.handleChange} /><br/> */}
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="teste">1</option>
//             <option value="teste2">2</option>
//             <option value="teste3">3</option>
//           </select><br/>
//           <input type="submit" />
//         </form>
//       );
//     }
//   }
// ReactDOM.render(
//   <Form />,
//     document.getElementById('root'));

// exemplo 13


  //   class Form extends React.Component{
  //     constructor(props){
  //       super(props);
  //       this.state = {
  //         isGoing:true,
  //         numberOfGuests:2,
  //       };
  //       this.handleChange = this.handleChange.bind(this);
  //     }
  //     handleChange(event){
  //       const target = event.target;
  //       const value = target.name ==='isGoing' ? target.checked : target.value;
  //       const name = target.name;
  //       this.setState({
  //       [name]: value
  //       });
  //     }
  //     render(){
  //       return(
  //         <form>
  //           <label>estão indo </label>
  //           <input
  //           name="isGoing"
  //           type="checkbox"
  //           checked={this.state.isGoing}
  //           onChange={this.handleChange}/>
  //         <br/>
  //           <label>
  //             <input
  //             name="numberOfGuests"
  //             type="number"
  //             value={this.state.numberOfGuests}
  //             onChange={this.handleChange}></input>
  //           </label>
  //         </form>
  //       );
  //     }
  //   }
  // ReactDOM.render(
  //   <Form />,
  //     document.getElementById('root'));
  
// exemplo 14

// css de java tira os "-" e coloca letra maiuscula.
import './mysass.scss';
class Header extends React.Component{
  render(){
    const style = {
      color: 'green', 
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontSize: '30px',
    }
    return(
      <div>
        <h1 style={{color:"red", backgroundColor:"blue"}}>Titulo Vermelho</h1>

        <p style={style}> meu css interno</p>

        <p className="teste">teste</p>

        <span>teste scss</span>

      </div>
    )
  }
}


ReactDOM.render(
<Header />,
  document.getElementById('root'));










    // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
