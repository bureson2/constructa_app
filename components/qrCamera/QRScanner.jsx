import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Permissions } from 'expo-permissions';
import { withRouter } from 'expo-router';
import styles from './component.style';

const QRScanner = ({ router }) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    useEffect(() => {
        async function requestCameraPermission() {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasCameraPermission(status === 'granted');
        }

        requestCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        try {
            console.log(data);
            const jsonData = JSON.parse(data);
            if (jsonData.hasOwnProperty('id')) {
                console.log(jsonData.id);
                router.push(`/car_report/${jsonData.id}`);
            } else {
                console.log('Klíč "name" nebyl nalezen v načteném JSONu');
            }
        } catch (error) {
            console.error('Chyba při parsování JSONu z QR kódu:', error);
        }
    };

    if (hasCameraPermission === null) {
        return <View />;
    }

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                style={styles.camera}
                onBarCodeScanned={handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            />
        </View>
    );
};

export default withRouter(QRScanner);
