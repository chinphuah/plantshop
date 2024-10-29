import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice(
    {
        name: 'posts',

        initialState: [
            {id: '1',title:'Learning Redux Tookit', content: "I've heardgood things about it"},
            {id: '2',title:'Learning Business Processes', content: "Important as way forward"},
        ],
        

        reducers:{
           



        }
    }
)
export const {     } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer