import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, userData } = action.payload;
            const index = state.findIndex(user => user.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...userData };
            }
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        },
        setUsers: (state, action) => {
            return action.payload;
        },
    },
});

export const { addUser, updateUser, deleteUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
