import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="http://www.v3wall.com/wallpaper/1920_1080/1402/1920_1080_20140217084533967158.jpg" />
                <Post alt="nature" src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" />
                <Post alt="nature" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
        )
    }
}

