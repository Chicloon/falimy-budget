import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import Protected from "./Protected";
import DataWrapper from "./DataWrapper";

@Protected
@DataWrapper
@observer
export default class Subitem extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		const { item } = this.store.appState;
		return (
			<div className="page post">
				<Link to="/posts">← Back to Posts</Link>
				{!!item &&
					<article>
						<h1>{item.title}</h1>
						<p>{item.body}</p>
					</article>}

			</div>
		);
	}
}
