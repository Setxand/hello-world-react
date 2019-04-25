import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"
import Radium from "radium"
class App extends Component {

	state = {
		persons: [
			{id: "dasaassd", name: "Artem", game: "tennis"},
			{id: "dasasdasd", name: "Bohdan", game: "basketball"},
			{id: "dassasdasd", name: "Riman", game: "football"}
		],
		otherState: "some other value",
		showPersons: false
	};

	deletePersonHandler = (index) => {
		const persons = this.state.persons;
		persons.splice(index, 1);
		this.setState({
			persons: persons
		});
	};

	togglePersonHandler = () => {
		const show = this.state.showPersons;
		this.setState({showPersons: !show});
	};

	render() {

		const style = {
			backgroundColor: "white",
			font: "inherit",
			padding: "8px",
			border: "2px solid gray",
			":hover": {
				backgroundColor: "lightgreen",
				color: "black"
			}
		};

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push("red");
		}

		if (this.state.persons.length <= 1) {
			classes.push("bold");
		}


		return (<div className={"App"}>
				<p className={classes.join(" ")}>Have a nice time</p>
				<button onClick={this.togglePersonHandler}
						style={style}>
					Toggle person
				</button>
				{this.checkPersonShow(style)}
			</div>
		);
	};

	checkPersonShow(style) {
		if (this.state.showPersons) {
			style.backgroundColor = "red";
			style["hover"] = {
				color: "solomon"
			}
			return this.state.persons.map((p, index) => {
				return (<Person
					name={p.name}
					game={p.game}
					key={p.id}
					clickDelete={() => this.deletePersonHandler(index)}
					change={(event) => this.eventHandler(event, p.id)}/>)
			})
		}
		return null;

	}

	undoDeletePersonHandler(index) {
		let persons = this.state.persons;
		persons.push(this.state.undoPersons);
		this.setState({
			undoPersons: null,
			persons: persons
		});
	}

	eventHandler(event, id) {
		const persons = this.state.persons;
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		persons[personIndex].name = event.target.value;
		this.setState({persons: persons});
	}
};

export default Radium(App);
// state = {
// 	persons: [
// 		{ name : "Artem", game : "tennis" },
// 		{ name : "Bohdan", game : "basketball" },
// 		{ name : "Riman", game : "football" }
// 	]
// };
//
// switchNameHandler = () => {
// 	this.setState({
// 		persons : [
// 			{ name : "Artemius", game : "tennis" },
// 			{ name : "Bohdan", game : "basketball" },
// 			{ name : "Riman", game : "tessin too" }
// 		]
// 	})
// };
