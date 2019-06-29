import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
    componentDidMount() {
        this.props.turnOffNav();
      }
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default About;