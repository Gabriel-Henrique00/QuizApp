import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { Text } from "react-native-paper";
import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ResultModal from "../components/ResultModal";
import { loadQuizQuestions } from "../services/quizService";

export default function GameScreen() {
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [loading, setLoading] = useState(true);

    const startNewGame = () => {
        setLoading(true);
        const q = loadQuizQuestions();
        setQuestions(q);
        setIndex(0);
        setScore(0);
        setFinished(false);
        setLoading(false);
    };

    useEffect(() => {
        startNewGame();
    }, []);

    function answer(option) {
        const current = questions[index];
        const isCorrect = option === current.correct;

        if (isCorrect) {
            setScore(prev => prev + 1);
            Alert.alert("Correto!", "Muito bem, você acertou!");
        } else {
            Alert.alert("Errado", "Infelizmente você errou esta.");
        }

        if (index + 1 >= questions.length) {
            setFinished(true);
        } else {
            setIndex(prev => prev + 1);
        }
    }

    if (loading || questions.length === 0) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#6200ee" />
                <Text style={{ marginTop: 10 }}>Carregando perguntas...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {!finished ? (
                <View style={styles.gameArea}>
                    <Text variant="titleMedium" style={styles.progressText}>
                        PERGUNTA {index + 1} DE {questions.length}
                    </Text>

                    <QuestionCard
                        question={questions[index]}
                        answer={answer}
                    />
                </View>
            ) : (
                <ResultModal
                    score={score}
                    total={questions.length}
                    restart={startNewGame}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center',     // Centraliza horizontalmente
        padding: 20,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameArea: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
    },
    progressText: {
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#6200ee',
    }
});