import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import stylePosts from '../styles/stylesPosts';

function Posts({ navigation }) {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  })

  return (fetchedPosts.length !== 0 &&
    <ScrollView>
      <View style={stylePosts.post}>
        {fetchedPosts.map(post => <Post post={post} key={post.id} navigation={navigation} />)}
      </View>
    </ScrollView>)
}

export default Posts;