import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import stylePost from '../styles/stylesPost';

function Post({ navigation, post }) {
  return (
    <View style={stylePost.post}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Image', { uriImage: post["urls"]["raw"] })}>
        <Image style={stylePost.image}
          source={{ uri: post["urls"]["raw"] }}
        />
      </TouchableOpacity>
      <Text style={stylePost.authorImage}>{post["user"]["name"]}</Text>
      <Text style={stylePost.nameImage}>{post["alt_description"]}</Text>
    </View>
  )
}

export default Post;