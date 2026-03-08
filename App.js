import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { initDatabase } from "./src/database/database";
import HomeScreen from "./src/screens/HomeScreen";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
    const [screen, setScreen] = useState("home");

    useEffect(() => {
        initDatabase();
    }, []);

    return (
        <SafeAreaProvider>
            <PaperProvider>
                {screen === "home" && <HomeScreen startGame={() => setScreen("game")} />}
                {screen === "game" && <GameScreen goHome={() => setScreen("home")} />}
            </PaperProvider>
        </SafeAreaProvider>
    );
}