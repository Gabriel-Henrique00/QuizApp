import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "react-native-paper";

export default function HomeScreen({ startGame }) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/quiz.png")}
                style={styles.image}
                resizeMode="contain"
            />

            <Text variant="displaySmall" style={styles.title}>
                Quiz App
            </Text>

            <Button
                mode="contained"
                onPress={startGame}
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonLabel}
            >
                Começar Jogo
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#1a1a1a',
    },
    buttonContent: {
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    buttonLabel: {
        fontSize: 18,
    }
});