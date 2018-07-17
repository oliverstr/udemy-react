import React, { Component } from 'react';
import Person from './Person/Person';
import styles from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let people = null;
    let buttonClass = '';

    if (this.state.showPeople) {
      people = (
        <div>
          { this.state.people.map((person, index) => (
            // ErrorBoundaries only works during production and should only used where error treatments are part of the app
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name} 
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                change={event => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          )) }
        </div>
      )
      buttonClass = styles.Red;
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.people.length <= 1) {
      classes.push(styles.bold);
    }

    return (
        <div className={styles.App}>
          <h1>Hello world!</h1>
          <p className={classes.join(' ')}>People name's</p>
          <button className={buttonClass}
            onClick={this.togglePeopleHandler.bind(this, 'Oliver Strobel')}>Toggle people</button>
            {people}
        </div>
    );
  }
}

export default App;
