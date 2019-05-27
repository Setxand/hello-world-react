import React, {Component} from "react"



class CommonHandler extends Component {

	state = {
		error : false,
		message: ""
	};


	componentDidCatch = (error, info) => {
		this.setState({error: true, message: error})
	};

	render() {
		return this.state.error ? (
			<h1>something went wrong : {this.state.message}(</h1>
		) : this.props.children;
	}

}

export default CommonHandler;