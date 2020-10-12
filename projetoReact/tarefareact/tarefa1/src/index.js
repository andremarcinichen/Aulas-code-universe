import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// topico 1
// function Welcome(props){
//   return <h1>olá, {props.name}</h1>;
// }

// function App(){
//   return (
//     <div>
//       <Welcome name="gabriel"/>
//       <Welcome name="gabriel2"/>
//       <Welcome name="gabriel3"/>
//     </div>
//   );
// }
//   ReactDOM.render(
//     <App />,
//       document.getElementById('root'));
    
  
// topico 2

function FormatDate(date){
  return date.toLocaleDateString();
}
//topico 3
// function Comment (props){
//   return(
//     <div className="comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//           />
//         <div className="userInfo-name">
//         {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="comment-date">
//         {FormatDate(props.date)}
//       </div>
//     </div>
//   );
// }

const comment = {
  date: new Date(),
  text: 'espero que goste de aprender react',
  author:{
    name:'olá gatinho',
    avatarUrl:'https://placekitten.com/g/64/64',
  },
};

// topico 4
function Avatar(props){
  return(
    <img
    className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
    />
  );
}

// topico 5
// function Comment (props){
//   return(
//     <div className="comment">
//       <div className="UserInfo">
//         <Avatar user={props.author}/>
//         <div className="userInfo-name">
//         {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="comment-date">
//         {FormatDate(props.date)}
//       </div>
//     </div>
//   );
// }

//topico 6
function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="userInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

// topico 7
function Comment (props){
  return(
    <div className="comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="comment-date">
        {FormatDate(props.date)}
      </div>
    </div>
  );
}

// topico 8 visao geral do codigo

//topico 9

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
    />,
  document.getElementById('root'));

serviceWorker.unregister();
