import React from 'react';
import{Text, View, StyleSheet} from 'react-native';

const MovieDetailsScreen =({navigation,route}:any) => {
    
    return(
        <view style={styles.container}>
            <Text>MovieDeatailsScreen</Text>
        </view>
    );
};

const styles=StyleSheet.create({
    container:{},
});

export default MovieDetailsScreen;