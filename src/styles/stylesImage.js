import { StyleSheet, Dimensions } from 'react-native';

const styleImage = StyleSheet.create({
    image: {
        'width': Dimensions.get('window').width, 
        'height': Dimensions.get('window').height, 
        resizeMode: 'contain'
    }
});

export default styleImage;