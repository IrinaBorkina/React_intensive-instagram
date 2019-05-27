import React, {Component} from 'react';

export default class User extends Component {
    render() {
        return (
            <a href="#" className="user">
                <img src={this.props.src} alt={this.props.alt}></img>
                <div>{this.props.name}</div>
            </a>
        )
    }
}
