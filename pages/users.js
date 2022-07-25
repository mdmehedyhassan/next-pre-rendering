import React from 'react';
import User from '../components/user';
import Link from "next/link";

const UserList = ({users}) => {
    return (
        <div>
            <h1>List of users</h1>
            <Link href='/'>Home</Link>
            {
                users?.map((user) => {
                    return (
                        <div key={user.id}>
                            <User  user={user} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UserList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data
        }
    }
}