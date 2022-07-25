import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <p style={{color: 'red'}}>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default User;