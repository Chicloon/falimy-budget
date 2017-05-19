import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import Button from "../ui/Button";


@inject("store")
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.appState;
    }


    authenticate = (e) => {
        e.preventDefault();
        console.log("CLICKED BUTTON");
        this.store.authenticate();
    }


    render() {
        const {
            authenticated,
            authenticating
        } = this.store
        return (
            <div className="page login">
                <Button
                    onClick={this.authenticate}
                    title={authenticated ? "Log out" : "Sign in"}
                />
                Login form here
				{authenticated &&
                    !authenticating &&
                    <Redirect to="/" />}

            </div>

        );
    }
}


