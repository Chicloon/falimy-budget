import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import c from '../';

import MainLayout from './MainLayout';
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
		// this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated			
		} = this.store.appState;
		console.info('Layout');
		return (
			<div className="wrapper">				{/*<DevTools />*/}
				
				{!authenticated ? <c.Login.Login /> : <MainLayout />  }
			
			</div>
		);
	}
}
