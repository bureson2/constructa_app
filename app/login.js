import styles from "./component.style";
import {
    Text,
    ImageBackground,
    View,
    TextInput
} from 'react-native';
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Stack, useRouter} from "expo-router";
import BlueButton from "../components/buttons/BlueButton";
import ScreenHeader from "../components/headers/ScreenHeader";

// TODO odstranit default email a heslo

const origin = "192.168.1.9";

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('email@email.cz');
    const [password, setPassword] = useState('1234');

    const handleLogin = async () => {

        try {
            const response = await fetch(`http://${origin}:8080/api/v1/auth/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const data = await response.json();

            if (response.ok) {
                await AsyncStorage.setItem('token', data.token);
                router.push(`home`);
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
            <ScreenHeader title={"Přihlášení"} show={false}/>
            <View style={{ height: '100%', alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.loginText}>
                    Přihlášení
                </Text>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.label}>
                            Email
                        </Text>
                        <TextInput
                            value={email}
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            onChangeText={text => setEmail(text)}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Heslo
                        </Text>
                        <TextInput
                            value={password}
                            style={styles.inputText}
                            placeholder="Heslo..."
                            placeholderTextColor="#003f5c"
                            autoCompleteType="password"
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <BlueButton text={"Přihlásit se"} onPress={handleLogin}/>
                    </View>

                </View>
            </View>
        </ImageBackground>
    )
}

export default Login;