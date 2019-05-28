import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllPosts()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderUsers (arr) {
        return arr.map((item) => {
            const {name, altname, photo} = item;

            return (
                <User
                    src={photo}
                    alt={altname}
                    name={name}
                    min
                />
            );
        })
    }

    render () {
        const {error, users} = this.state;
        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderUsers(users);

        return (
            <div className="right">
                <User 
                    src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
                    alt="girl"
                    name="Iren"
                />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}

// export default function Users() {
//     return (
//         <div className="right">
//             <User 
//                 src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
//                 alt="girl"
//                 name="Iren"
//             />
//             <div className="users__block">
//                 <User 
//                     src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
//                     alt="girl"
//                     name="Iren"
//                     min
//                 />
//                 <User 
//                     src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
//                     alt="girl"
//                     name="Iren"
//                     min
//                 />
//                 <User 
//                     src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
//                     alt="girl"
//                     name="Iren"
//                     min
//                 />
//                 <User 
//                     src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
//                     alt="girl"
//                     name="Iren"
//                     min
//                 />
//             </div>
//         </div>
//     )
// }