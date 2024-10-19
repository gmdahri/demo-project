
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from '../redux/userSlice';

const UserList = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({ name: '', email: '', id: '' });
    const [editingUserId, setEditingUserId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUserId) {
            dispatch(updateUser({ id: editingUserId, userData: newUser }));
            setEditingUserId(null);
        } else {
            dispatch(addUser({ ...newUser, id: Date.now() }));
        }
        setNewUser({ name: '', email: '', id: '' });
    };

    const handleEdit = (user) => {
        setNewUser({ name: user.name, email: user.email, id: user.id });
        setEditingUserId(user.id);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">{editingUserId ? 'Update User' : 'Add User'}</button>
            </form>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <div className='btn-container'>
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
