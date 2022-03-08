import React, { Component } from 'react';
import Navigation from '../src/navigation';
import { NavigationService } from '../src/common';

class Router extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Navigation
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        )
    }
}

export default Router;