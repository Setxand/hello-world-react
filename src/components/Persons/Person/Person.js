import React, {Component} from 'react';

class Person extends Component {

	render() {
		return (
			<div className={"Person"}>
				<p onClick={this.props.click}>
					hey {this.props.name}!! what will u do in {Math.floor(Math.random() * 40)} days? May be
					would we play {this.props.game}?
				</p>

				<p>{this.props.children}</p>
				<input name={"name"} onChange={this.props.change}/>
				<button onClick={this.props.clickDelete}>Delete person</button>

			</div>
		);
	};

}


export default Person;