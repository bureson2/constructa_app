import React, {useEffect, useState} from 'react';
import {LogBox, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import ScreenHeader from "../../components/headers/ScreenHeader";
import styles from "./component.style";
import {useRouter} from "expo-router";

// QR Scanner component
const qrScanner = () => {
    LogBox.ignoreAllLogs(true);

    // Initialize state variables
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const router = useRouter();

    // Request camera permission on component mount
    useEffect(() => {
        (async () => {
            const {status} = await Permissions.askAsync(Permissions.CAMERA);
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    // Handle barcode scanning
    const handleBarCodeScanned = ({type, data}) => {
        try {
            const jsonData = JSON.parse(data);
            let path = "";
            if (jsonData.hasOwnProperty('type')) {
                path = jsonData.type;
            }
            if (jsonData.hasOwnProperty('id')) {
                router.push(`/${path}/${jsonData.id}`);
            } else {
                console.log('Klíč "name" nebo "type" nebyl nalezen v načteném JSONu');
            }
        } catch (error) {
            console.error('Chyba při parsování JSONu z QR kódu:', error);
        }
    };

    // Display a loading view while waiting for camera permission
    if (hasCameraPermission === null) {
        return <View/>;
    }

    // Display an error message if camera permission is denied
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Render the QR scanner
    return (
        <View style={styles.container}>
            <ScreenHeader title={"QR Scanner"}/>
            <BarCodeScanner
                style={styles.camera}
                onBarCodeScanned={handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            />
        </View>
    );
}

export default qrScanner;
