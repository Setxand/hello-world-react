import React, {Component} from 'react';
import './App.css';
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {

	constructor(props) {
		super(props);

	}

	state = {
		persons: [
			{id: "dasaassd", name: "Artem", game: "tennis"},
			{id: "dasasdasd", name: "Bohdan", game: "basketball"},
			{id: "dassasdasd", name: "Riman", game: "football"}
		],
		otherState: "some other value",
		showCockpit: true,
		showPersons: false,
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
			border: "2px solid gray"
		};


		return (<div className={"App"}>

				{this.state.showCockpit ?
					<Cockpit
						title={this.props.title}
						persons={this.state.persons}
						togglePerson={this.togglePersonHandler}
						style={style}
						showCockpit={this.state.showCockpit}
					/> : null}
				{this.checkPersonShow()}

				<button onClick={() => {
					this.setState({showCockpit: false})
				}}>Remove
				</button>
			</div>
		);
	};

	checkPersonShow = () => {
		if (this.state.showPersons) {

			return <Persons persons={this.state.persons}
							delete={(id) => this.deletePersonHandler(id)}
							change={(event, id) => this.eventHandler(event, id)}
			/>
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

	eventHandler = (event, id) => {
		const persons = this.state.persons;
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		persons[personIndex].name = event.target.value;
		this.setState({persons: persons});
	}
};

export default App;
