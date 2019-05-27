import React, {useEffect} from "react";
import "./Cockpit.css"


const Cockpit = (props) => {

	useEffect(() => {
		alert("cockpit useEffect() for persons");

		return (() => {
			alert("Removed")
		});

	}, [props.persons]);

	let classes = [];
	if (props.persons.length <= 2) {
		classes.push("red");
	}

	if (props.persons.length <= 1) {
		classes.push("bold");
	}

	return (

		<div className={"Cockpit"}>
			<h1>{props.title}</h1>
			<p className={classes.join(" ")}>Have a nice time</p>
			<button onClick={props.togglePerson}
					style={props.style}>
				Toggle person
			</button>
		</div>
	);
};


export default Cockpit;