import React from 'react';
import * as Screens from './screens';

const screens = ['Start', 'Songer', 'Trip', 'Without', 'Animal', 'Character', 'Year', 'Congratulations'];

const getNextScreen = (screen) => screens[screens.indexOf(screen) + 1];

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            screen: screens[0],
            answers: {},
        };
    }

    changeScreen = (screen) => {
        this.setState({ screen });
    };

    setAnswer = (resultText) => {
        const { screen } = this.state;

        const nextScreen = getNextScreen(screen);
        this.setState({
            screen: nextScreen,
            answer: {
                [screen]: resultText,
            }
        });
    };

    render() {
        const { screen } = this.state;

        const CurrentScreen = Screens[screen];
        const nextScreen = getNextScreen(screen);

        return (
          <div className={`layout layout--${screen}`}>
              <div className='screen'>
                  <CurrentScreen
                    onSubmit={this.setAnswer}
                    onNext={() => { this.changeScreen(nextScreen) }}
                  />
              </div>
          </div>
        );
    }
}
