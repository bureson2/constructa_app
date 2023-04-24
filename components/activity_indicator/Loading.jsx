import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import * as Progress from 'react-native-progress';

const Loading = () => {

    return (
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Progress.CircleSnail
                size={200}
                color={['teal', 'royalblue']}
            />
        </SafeAreaView>
    )
};

export default Loading;