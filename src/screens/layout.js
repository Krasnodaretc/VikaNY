import React from 'react';
import StartScreen from './start';

const screens = {
    start: 'start',
    'first': '1',
    '2': '2',
    '3': '3',
    finished: 'finished',
};

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            screen: screens.start,
        };
    }

    changeScreen = (screen) => {
        this.setState({ screen });
    };

    render() {
        const { screen } = this.state;
        switch(screen) {
            case screens.start:
                return <StartScreen onNext={() => this.changeScreen(screens.first)}/>;

            default:
                return <div>default</div>;
        }
    }
}
