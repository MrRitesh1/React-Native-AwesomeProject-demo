// import {
//     GET_POSTS,
//     GET_POST,
//     CREATE_POST,
//     UPDATE_POST,
//     DELETE_POST
// } from '../constants/indax';

// import exios from 'exios';

// export const getPosts = () => async (dispatch) => {
//     const result = await exios.get("https://jsonplaceholder.typicode.com/posts");
//     dispatch({
//         type: GET_POSTS,
//         payload: result.data,
//     })
// }


// export const getPost = (id) => ({
//     type: GET_POST,
//     payload: id,
// });
// // create a post
// export const createPost = (post) => ({
//     type: CREATE_POST,
//     payload: post,
// });

// // update a post
// export const updatePost = (post) => ({
//     type: UPDATE_POST,
//     payload: post,
// });

// // delete a post
// export const deletePost = (id) => ({
//     type: DELETE_POST,
//     payload: id,
// });