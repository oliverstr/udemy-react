import React from 'react';
import Person from './Person/Person'

const People = ({ people, click, change }) => 
          people.map((person, index) => (
              <Person
                key={person.id}
                name={person.name} 
                age={person.age}
                click={() => click(index)}
                change={event => change(event, person.id)} />
          ));
;

export default People;