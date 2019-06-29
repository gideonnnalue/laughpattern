import React, { Component } from 'react';
import PageHeader from "../../utils/PageHeader";

class index extends Component {
    componentDidMount() {
        this.props.turnOffNav();
      }

    render() {
        return (
            <div>
                <PageHeader title="Videos" />
            </div>
        );
    }
}

export default index;