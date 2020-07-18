import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Pictures from './Pictures';
import PicturesList from './PictureList';

const listPictures = [
  {
    id: '1i',
    src:
      'https://www.publicdomainpictures.net/pictures/270000/velka/interior-bedroom.jpg',
  },
  {
    id: '2i',
    src:
      'https://www.publicdomainpictures.net/pictures/280000/velka/poster-canvas-card-mock-up-1542729817hoS.jpg',
  },
  {
    id: '3i',
    src:
      'https://www.publicdomainpictures.net/pictures/320000/velka/metal-frames-mockup.png',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Minha Lista de Componentes',
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <div className="main">
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value="Título Show" />
          <ShowButton
            changeTitle={this.changeTitle}
            value="React seu gostoso"
          />
          <PicturesList>
            {listPictures}
          </PicturesList>
        </MyList>
      </div>
    );
  }
}
export default App;
