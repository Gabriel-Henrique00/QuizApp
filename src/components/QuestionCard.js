import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function QuestionCard({ question, answer }) {
    return (
        <Card style={styles.card}>
            <Card.Content style={styles.content}>
                <Text variant="headlineSmall" style={styles.questionText}>
                    {question.question}
                </Text>

                <View style={styles.buttonContainer}>
                    <Button
                        mode="contained-tonal"
                        onPress={() => answer(1)}
                        style={styles.button}
                        contentStyle={styles.buttonInner}
                    >
                        {question.option1}
                    </Button>

                    <Button
                        mode="contained-tonal"
                        onPress={() => answer(2)}
                        style={styles.button}
                        contentStyle={styles.buttonInner}
                    >
                        {question.option2}
                    </Button>
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        elevation: 4,
        borderRadius: 16,
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    questionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#1c1b1f',
    },
    buttonContainer: {
        width: '100%',
        gap: 12,
    },
    button: {
        borderRadius: 12,
    },
    buttonInner: {
        paddingVertical: 8,
    }
});