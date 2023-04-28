import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import * as Progress from 'react-native-progress';

/**
 * Loading component that displays a snail progress indicator.
 *
 * @returns {React.Element} A React component representing the loading state.
 */
const Loading = () => {

    return (
        // Center the progress indicator in a safe area view
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            {/* Render the snail progress indicator with custom size and colors */}
            <Progress.CircleSnail
                size={200}
                color={['teal', 'royalblue']}
            />
        </SafeAreaView>
    )
};

export default Loading;