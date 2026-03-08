import * as SQLite from "expo-sqlite";
import { questionsData } from "../data/questions";

const db = SQLite.openDatabaseSync("quiz.db");

export function initDatabase() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS questions (
                                                 id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                 question TEXT,
                                                 option1 TEXT,
                                                 option2 TEXT,
                                                 correct INTEGER
        );
    `);

    const result = db.getAllSync("SELECT * FROM questions");

    if (result.length === 0) {
        db.withTransactionSync(() => {
            questionsData.forEach(q => {
                db.runSync(
                    "INSERT INTO questions (question, option1, option2, correct) VALUES (?, ?, ?, ?)",
                    [q[0], q[1], q[2], q[3]]
                );
            });
        });
    }
}

export function getRandomQuestions(limit = 10) {
    return db.getAllSync(`SELECT * FROM questions ORDER BY RANDOM() LIMIT ?`, [limit]);
}