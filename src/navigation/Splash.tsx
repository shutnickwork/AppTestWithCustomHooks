import React from 'react';
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
    console.log('Splash navigation', navigation)
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <LottieView
                    source={require('../assets/lightning.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!');
                        navigation.replace('Home');
                    }}
                />
            </View>
        )
}

export default Splash;
