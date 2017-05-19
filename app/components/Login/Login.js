import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import cn from 'classNames';

import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from 'antd';
const FormItem = Form.Item;

import styles from './login.sass';

@inject("store")
class LoginForm extends Component {
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
        const { getFieldDecorator } = this.props.form;
        console.log('styles', styles);
        return (
            <Form onSubmit={this.authenticate} className={cn(styles.loginForm)}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                        )}
                    <a className={styles.loginFormForgot} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className={cn(styles.loginFormButton)}>
                        Log in
          </Button>
                    Or <a className = {styles.link}href="">register now!</a>
                </FormItem>

                {this.props.store.authenticated &&
                    !this.props.store.authenticating &&
                    <Redirect to="/" />}
            </Form>
        );
    }
}

const LoginFormWrapper = Form.create()(LoginForm);

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
export default class Login extends Component {

    render() {
        return (

            <Row type="flex" justify="space-around" align="middle" style={{ minHeight: '100vh' }}>
                <Col span={2}>
                <p className = {cn(styles.link)}> asdfasdf </p>
                    <Card style={{width: '300px'}}>
                        <LoginFormWrapper />
                    </Card>
                </Col>
            </Row>

        );
    }

};


/*@inject("store")
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.appState;
    }

    render() {
        return (
            <div>
                <login />

            </div>
        );
    }

}*/
    /*render() {
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
				

            </div>

        );
    }*/




