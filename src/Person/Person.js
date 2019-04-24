import React from 'react';

const person = (props) => {
	return (<div>

			<p onClick={props.click}>hey {props.name}!! what will u do in {Math.floor(Math.random() * 40)} days? May be
																				would we play {props.game}?</p>
			<p>{props.children}</p>
			<input name={"name"} onChange={props.change}/>

		</div>
	)
};


export default person;