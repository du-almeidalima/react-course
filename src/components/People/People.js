import React from "react";
import Person from "./Person/Person";

const people = (props) => props.people.map((person) => {
  return (
    <Person
      name={person.name}
      age={person.age}
      key={person.id}
      closeClickHandler={() => {
        props.closePersonHandler(person.id);
      }}
      inputHandler={(event) => {
        props.inputHandler(event, person.id);
      }}
    >
      {person.hobby ? person.hobby : null}
    </Person>
  );
});

export default people;
