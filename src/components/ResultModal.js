import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Avatar } from 'react-native-paper';

export default function ResultModal({ score, total, restart }) {
    // Cálculo simples para dar um feedback visual diferente conforme o desempenho
    const isGoodScore = score >= total / 2;

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    {/* Ícone de troféu ou conclusão */}
                    <Avatar.Icon
                        size={80}
                        icon={isGoodScore ? "trophy" : "alert-circle"}
                        style={[styles.icon, { backgroundColor: isGoodScore ? "#FFD700" : "#e1e1e1" }]}
                        color={isGoodScore ? "#8B4513" : "#757575"}
                    />

                    <Text variant="headlineMedium" style={styles.title}>
                        {isGoodScore ? "Parabéns!" : "Fim de Jogo"}
                    </Text>

                    <Text variant="bodyLarge" style={styles.scoreText}>
                        Você acertou
                    </Text>

                    <Text variant="displayMedium" style={styles.points}>
                        {score} / {total}
                    </Text>

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={restart}
                            style={styles.button}
                            contentStyle={styles.buttonInner}
                        >
                            Jogar Novamente
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '90%',
        maxWidth: 350,
        borderRadius: 24,
        elevation: 5,
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1c1b1f',
    },
    scoreText: {
        color: '#49454f',
    },
    points: {
        fontWeight: '900',
        color: '#6200ee',
        marginVertical: 10,
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
    },
    button: {
        borderRadius: 12,
    },
    buttonInner: {
        paddingVertical: 6,
    }
});