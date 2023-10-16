import React, { Component } from 'react';

class UserList extends Component {
    state = {
        users: [
            { id: 1, name: 'John Doe', email: 'johndoe@email.com' },
            { id: 2, name: 'Jane Smith', email: 'janesmith@email.com' }
        ]
    };

    render() {
        return (
            <div>
                <h1>User Management Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;
