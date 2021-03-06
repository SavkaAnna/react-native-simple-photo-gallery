import { FETCH_POSTS } from './types';

export function fetchPosts() {
  return async dispatch => {
    const response = await fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9');
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json })
  }
}