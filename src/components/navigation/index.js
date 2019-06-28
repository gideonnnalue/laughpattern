import React, { Component } from 'react';

class navigation extends Component {
    render() {
        return (
            <div className="navigation">

                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>01 </span>Home</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>02 </span>About</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>03 </span>News Feed</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>04 </span>Videos</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>05 </span>Member</a></li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default navigation;