import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

export default function DataWrapper(Component) {
	@inject("store")
	// @observer
	class DataFetcher extends Component {
		constructor(props) {
			super(props);
			this.store = this.props.store.appState;
		}

		componentDidMount() {
			console.log('DataWrapper', this.props);
			let pathname = this.props.match.url;
			let id = this.props.match.id ? this.props.match.id : null;
			// this.store.fetchData(pathname, id);
			this.store.fetchData('/posts');
		}

		componentWillUnmount() {
			this.store.clearItems();
		}

		render() {
			return <Component {...this.props} />;
		}
	}
	return DataFetcher;
}
