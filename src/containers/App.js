import React, { Component, Fragment } from 'react';
import styles from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import addClass from '../hoc/addClass2ndOption';

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

    if (this.state.showPeople) {
      people = (
          <People people={this.state.people} click={this.deletePersonHandler} change={this.nameChangedHandler}/>
      )
    }

    return (
        <Fragment>
          <Cockpit appTitle={this.props.title} people={this.state.people} showPeople={this.state.showPeople} click={this.togglePeopleHandler}/>
          {people}
        </Fragment>
    );
  }
}

export default addClass(App, styles.App);
