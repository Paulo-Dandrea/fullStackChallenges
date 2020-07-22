import React from 'react';
import './Pokemon.css';
import { Link, Route, Switch } from 'react-router-dom';
import Details from './Details';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;

    return (
      <Link to={`/pokemon/${name}`}> 
      <div className="pokemon">
      <Switch>
        <Route path={`/pokemon/${name}`} component={Details} />
        <Route 
        path={`/pokemon/${name}`}
        render={props => <Details {...props} pokeUser={name}/>}
        />


        </Switch>

        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: `${averageWeight.value} ${averageWeight.measurementUnit}`
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
      </Link>
    );
  }
}

export default Pokemon;

{/* <Route path='/pokemon' component={Details} />
<Route path="/pokemon/:id" component={Users} /> */}
