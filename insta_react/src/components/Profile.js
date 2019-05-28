import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container" profile>
            <User
                src="https://cdn.shopify.com/s/files/1/1299/7671/products/hummingbirds-blindfolded-art-print_large.png?v=1522294174"
                alt="girl"
                name="Iren"
            />

            <Palette />
        </div>
    )
}

export default Profile;
