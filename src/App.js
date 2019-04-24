import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

	state = {
		persons: [
			{name: "Artem", game: "tennis"},
			{name: "Bohdan", game: "basketball"},
			{name: "Riman", game: "football"}
		],
		otherState: "some other value",
		showPersons: false
	};

	switchNameHandler = newName => {
		this.setState({
			persons: [
				{name: newName, game: "tennis"},
				{name: "Bohdan", game: "basketball"},
				{name: "Riman", game: "tessin too"}
			]
		})
	};

	changeStateHandler = (event) => {
		this.setState({
			persons: [
				{name: event.target.value, game: "tennis"},
				{name: "Bohdan", game: "basketball"},
				{name: "Riman", game: "tessin too"}
			]
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
			border: "2px solid gray"
		};

		return (<div className={"App"}>
				<p>Have a nice time</p>
				<button onClick={this.togglePersonHandler}
						style={style}>
					Toggle person
				</button>
				{this.checkPersonShow()}
			</div>
		)
	};

	checkPersonShow() {
		return this.state.showPersons ?
			this.state.persons.map(p => {
				return (<Person
					name={p.name}
					game={p.game}/>)
			}) : null;
		// return this.state.showPersons ? (<div>
		// 	<Person
		// 		name={this.state.persons[0].name}
		// 		game={this.state.persons[0].game}/>
		// 	<Person
		// 		name={this.state.persons[1].name}
		// 		game={this.state.persons[1].game}
		// 		click={this.switchNameHandler.bind(this, "ArtemPar")}/>
		// 	<Person
		// 		name={this.state.persons[2].name}
		// 		game={this.state.persons[2].game}
		// 		change={this.changeStateHandler}/>
		// </div>) : null;
	}

};

export default App;
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
