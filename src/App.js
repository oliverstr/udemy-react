import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { id: 1, name: 'Oliver', age: 28 },
      { id: 2, name: 'Jair', age: 20 },
      { id: 3, name: 'Beto', age: 32 }
    ],
    showPeople: false
  }

  togglePeopleHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => person.id === id);
    
    const newPerson = {...this.state.people[personIndex]};
    newPerson.name = event.target.value;

    const newPeople = [...this.state.people];

    newPeople[personIndex] = newPerson;

    this.setState({ people: newPeople });
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }


  render() {
    // OPTIONAL INLINE STYLE (THIS IS SCOPED, NOT GLOBAL)
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          { this.state.people.map((person, index) => (
            <Person
              key={person.id}
              name={person.name} 
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              change={event => this.nameChangedHandler(event, person.id)} />
          )) }
        </div>
      )
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red');
    }
    if (this.state.people.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello world!</h1>
          <p className={classes.join(' ')}>People name's</p>
          <button 
            style={style}
            onClick={this.togglePeopleHandler.bind(this, 'Oliver Strobel')}>Toggle people</button>
            {people}
        </div>
    );
  }
}

export default App;
