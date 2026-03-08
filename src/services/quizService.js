import { getRandomQuestions } from "../database/database";

export function loadQuizQuestions() {
    return getRandomQuestions(10);
}