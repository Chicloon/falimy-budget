import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';


@inject("store")
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        const {
            authenticated,
            authenticating
        } = this.store.appState

        return (
            <div className="page login">
                
                Your login form here...
				{authenticated &&
                    !authenticating &&
                    <Redirect to="/" />}

            </div>
           
        );
    }
}


