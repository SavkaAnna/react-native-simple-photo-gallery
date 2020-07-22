import { StyleSheet } from 'react-native';

const stylePost = StyleSheet.create({
    post: {
        backgroundColor: "#DCDCDC", 
        maxWidth: 170, 
        minWidth: 170, 
        paddingBottom: 30,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    image: {
        height: 100, 
        width: "auto", 
        resizeMode: 'cover'
    },

    nameImage: {
        textAlign: 'right',
        fontStyle: 'italic',
        paddingRight: 5,
        color: '#696969'
    },

    authorImage: {
        textAlign: 'left',
        paddingBottom: 10,
        paddingLeft: 5,
        color: '#696969'
    }
});

export default stylePost;