import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import c from '../';

// import { Home } from './Home.js';

// import TopBar from "./TopBar";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;
		console.info('Layout');
		return (
			<div className="wrapper">
				{/*<DevTools />*/}
				<c.TopBar />

				<Route
					exact
					path="/"
					component={c.Home} 
				/>
				<Route
					exact
					path="/posts"
                    component={c.SubPage}					
				/>
				<Route
					exact
					path="/posts/:id"
                    component={c.SubItem}
				/>
				<Route
					exact
					path="/login"
                    component={c.Login.Login}
				/>
				<footer>
					{testval}
					<a href="https://twitter.com/mhaagens" target="_blank">
						@mhaagens
					</a>
					{" "}
					| github:
					{" "}
					<a href="https://github.com/mhaagens" target="_blank">
						mhaagens
					</a>
				</footer>
			</div>
		);
	}
}
