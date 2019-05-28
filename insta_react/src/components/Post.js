import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
                    alt="girl"
                    name="Iren"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    kksfjhdghd gdg dgdghdhdfghfnbf dfhkluilysajghj
                </div>
            </div>
        )
    }
}
