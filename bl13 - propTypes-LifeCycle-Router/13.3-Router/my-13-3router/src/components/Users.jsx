// arquivo Users.js
import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {

  const { match, usersList, greetingMessage = 'Hi There' } = props;

  console.log(match)


  // const SolutionID = match.params.userId;

    if (match.params.userId) return <div>Olá, Usuario numero: {match.params.userId} </div>

  return (
  <div>
    <h2> Users </h2>
    {usersList.map((user => (
      <div key={user}>
      <span>
        <Link to={`/users/${user}`}>
          {user}
        </Link>
      </span>
      <p> {greetingMessage}. This is my awesome {user} component </p>

    </div>
    )))}
  </div>
);
} 




export default Users;

// class Solutions extends Component {
//   render() {
//     const { diasGabaritos } = this.props;

//     const SolutionID = this.props.match.params.solutionID;

//     if (SolutionID) return <div>Toma ao vivasso {SolutionID}</div>

//     return (
//       <div>
//         <h1>Gabaritos</h1>
//         {diasGabaritos.map((gabarito) => (
//           <div key={gabarito}>
//             <span>
//               <Link className="solution-link" to={`/solutions/${gabarito}`}>
//                 {gabarito}
//               </Link>
//             </span>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }