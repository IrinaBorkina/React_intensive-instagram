import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import Spinner from './Spinner';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        spinner: true
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
            error: false,
            spinner: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            spinner: false
        })
    }

    renderPhotos(arr) {
        return arr.map((item) => {
            const {src, alt, id} = item;
            return (
                <img src={src} alt={alt} key={id}></img>
            )
        })
    }

    render() {
        const {error, photos} = this.state;
        if (error) {
            return <ErrorMessage />
        }
        if (this.state.loading) {
            return <Spinner />;
        }

        const items = this.renderPhotos(photos);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}
