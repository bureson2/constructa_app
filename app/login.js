import styles from "./component.style";
import {
    Text,
    ImageBackground,
    ImageBackgroundComponent,
    View,
    TextInput
} from 'react-native';
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Stack, useRouter} from "expo-router";
import BlueButton from "../components/buttons/BlueButton";


const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        // TODO
        router.push(`home`);

        try {
            const response = await fetch('http://192.168.0.171:8080/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            if (response.ok) {
                await AsyncStorage.setItem('token', data.token);
                router.push(`home`)
            } else {
                // přihlášení se nezdařilo, zobrazíme chybovou hlášku uživateli
                console.error('Přihlášení se nezdařilo');
            }
        } catch (error) {
            // došlo k chybě při volání endpointu, zobrazíme chybovou hlášku uživateli
            console.error('Nepodařilo se zavolat endpoint', error);
        }
    };

    return (
        <ImageBackground
            source={require("../assets/backgrounds/loginBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.loginText}>
                Přihlášení
            </Text>
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>
                        Heslo
                    </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Heslo..."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <BlueButton text={"Přihlásit se"} onPress={handleLogin}/>


            </View>
        </ImageBackground>
    )
}

export default Login;