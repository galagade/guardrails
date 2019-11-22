import React , { Component } from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';

const basePath = process.env.BASE_PATH || '/';
class AppClient extends Component {
  render() {
    return (
        <Router basename={ basePath }>
            <AppLayout>
                <RoutedContent />
            </AppLayout>
        </Router>
    );
  }
}

export default hot(module)(AppClient);
