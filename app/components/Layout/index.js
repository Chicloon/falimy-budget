import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

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
			<div>
				<Layout>
					{!authenticated ? <c.Login.Login /> :
						<div>
							<Header>Header</Header>
							<Layout>
								<Sider>Sider</Sider>
								<Content>
									<MainLayout />
								</Content>
							</Layout>
						</div>
					}
				</Layout>
			</div>
		);
	}
}
