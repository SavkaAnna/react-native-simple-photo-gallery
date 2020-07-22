import React from 'react';
import { Image } from 'react-native';
import styleImage from '../styles/stylesImage';

function ImagePost({ route }) {
  const { uriImage } = route.params;
  return <Image style={styleImage.image} source={{ uri: uriImage }} />
}

export default ImagePost;