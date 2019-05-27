import Person from "./Person/Person";
import React from "react";


const persons = (props) => props.persons.map((p, index) => {
	return (<Person

			name={p.name}
			game={p.game}
			key={p.id}

			clickDelete={() => props.delete(index)}
			change={(event) => props.change(event, p.id)}/>
	)
});


export default persons;
