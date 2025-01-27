import React, { useCallback, useEffect, useState } from 'react';
import "./Quiz.css";


const wordPool = [
    "Kwan", "Jang", "Nim", "Sa", "Bom", "Kyo", "Ban", "Sun", "Beh", "Hu", "Dan", "Gup", "Ko", "Ja", "You", "Won", "Bo", "Do", "Balk", "Dee", "Kuk", "Gi", "Shim", "Nah", "Weh", "Cho", "Hyung", "Deh", "Ryun", "Ho", "Sin", "Sul", "Kyok", "Pa", "O", "Rin", "Wen", "Jok", "Joon", "Be", "Gul", "Kee", "Mah", "Goh", "Rip", "Cha", "Ryut", "Kyung", "yet", "Bee", "Shi", "Jak", "Ku", "Ryung", "E", "Mat", "Up", "Ba", "Ro", "Shio", "Tora", "Dwee", "Bal"
];

const questions = [
    { question: "How many moves are in Basic Form One?", correctAnswer: 20, type: "number",},
    { question: "How many middle punches are in Basic Form One?", correctAnswer: 12, type: "number",},
    { question: "How many low blocks are in Basic Form One?", correctAnswer: 8, type: "number", },
    { question: "How many moves are in Basic Form Two?", correctAnswer: 20, type: "number", },
    { question: "How many high blocks in Basic Form Two?", correctAnswer: 6, type: "number", },
    { question: "How many low blocks in Basic Form Two?", correctAnswer: 8, type: "number", },
    { question: "How many high punches in Basic Form Two?", correctAnswer: 6, type: "number", },
    { question: "How many moves are in Basic Form Three?", correctAnswer: 20, type: "number", },
    { question: "How many side punches are in Basic Form Three?", correctAnswer: 6, type: "number", },
    { question: "How many middle blocks are in Basic Form Three?", correctAnswer: 6, type: "number", },
    { question: "How many middle punches are in Basic Form Three?", correctAnswer: 6, type: "number", },
    { question: "How many low blocks are in Basic Form Three?", correctAnswer: 2, type: "number", },
    { question: "How many moves are in Pyung Ahn Cho Dan?", correctAnswer: 22, type: "number", },
    { question: "What is the term for Grandmaster/Chief Instructor?", correctAnswer: ["Kwan", "Jang", "Nim"], type: "word" },
    { question: "What is the term for Qualified Instructor?", correctAnswer: ["Sa", "Bom", "Nim"], type: "word" },
    { question: "What is the term for Assistant Instructor?", correctAnswer: ["Kyo", "Sa", "Nim"], type: "word" },
    { question: "What is the term for Prefect?", correctAnswer: ["Ban", "Jang"], type: "word" },
    { question: "What is the term for Senior Member?", correctAnswer: ["Sun", "Beh"], type: "word" },
    { question: "What is the term for Junior Member?", correctAnswer: ["Hu", "Beh"], type: "word" },
    { question: "What is the term for Degree Holder?", correctAnswer: ["Dan"], type: "word" },
    { question: "What is the term for Grade Holder of colour Belt?", correctAnswer: ["Gup"], type: "word" },
    { question: "What is the term for Senior Dan Holder?", correctAnswer: ["Ko", "Dan", "Ja"], type: "word" },
    { question: "What is the term for Dan Holder?", correctAnswer: ["You", "Dan", "Ja"], type: "word" },
    { question: "What is the term for Student member?", correctAnswer: ["Kwan", "Won"], type: "word" },
    { question: "What is the term for Beginner?", correctAnswer: ["Cho", "Bo", "Ja"], type: "word" },
    { question: "What is the term for Training Hall?", correctAnswer: ["Do", "Jang"], type: "word" },
    { question: "What is the term for Training Uniform?", correctAnswer: ["Do", "Balk"], type: "word" },
    { question: "What is the term for Belt?", correctAnswer: ["Dee"], type: "word" },
    { question: "What is the term for National Flag?", correctAnswer: ["Kuk", "Gi"], type: "word" },
    { question: "What is the term for Organisational Flag?", correctAnswer: ["Kwan", "Gi"], type: "word" },
    { question: "What is the term for Spiritual Power?", correctAnswer: ["Shim", "Gung"], type: "word" },
    { question: "What is the term for Internal Power?", correctAnswer: ["Nah", "Gung"], type: "word" },
    { question: "What is the term for External Power?", correctAnswer: ["Weh", "Gung"], type: "word" },
    { question: "What is the term for Basic?", correctAnswer: ["Gi", "Cho"], type: "word" },
    { question: "What is the term for Form?", correctAnswer: ["Hyung"], type: "word" },
    { question: "What is the term for Sparring?", correctAnswer: ["Deh", "Ryun"], type: "word" },
    { question: "What is the term for Self-defence?", correctAnswer: ["Ho", "Sin", "Sul"], type: "word" },
    { question: "What is the term for Breaking Techniques?", correctAnswer: ["Kyok", "Pa"], type: "word" },
    { question: "What is the term for Right?", correctAnswer: ["O", "Rin", "Jok"], type: "word" },
    { question: "What is the term for Left?", correctAnswer: ["Wen", "Jok"], type: "word" },
    { question: "What is the term for Ready Stance?", correctAnswer: ["Joon", "Be", "Ja", "Seh"], type: "word" },
    { question: "What is the term for Front Stance?", correctAnswer: ["Joon", "Gul", "Ja", "Seh"], type: "word" },
    { question: "What is the term for Back Stance?", correctAnswer: ["Hu", "Gul", "Ja", "Seh"], type: "word" },
    { question: "What is the term for Horse Stance?", correctAnswer: ["Kee", "Mah", "Ja", "Seh"], type: "word" },
    { question: "What is the term for Side Stance?", correctAnswer: ["Sa", "Goh", "Rip", "Ja", "Seh"], type: "word"},
    { question: "What is the term for Attention?",  correctAnswer: ["Cha", "Ryut"], type: "word"},
    { question: "What is the term for Bow?",  correctAnswer: ["Kyung", "Yet"]},
    { question: "What is the term for Ready?", correctAnswer: ["Joon", "Bee"], type: "word"},
    { question: "What is the term for Begin?", correctAnswer: ["Shi", "Jak"], type: "word"},
    { question: "What is the term for Count?", correctAnswer: ["Ku", "Ryung"], type: "word"},
    { question: "What is the term for by the Count?", correctAnswer: ["Ku", "Ryung", "E", "Mat", "Cho", "So"], type: "word"},
    { question: "What is the term for Without Count?", correctAnswer: ["Ku", "Ryung", "Up", "Shi"], type: "word"},
    { question: "What is the term for Return?",  correctAnswer: ["Ba", "Ro"], type: "word"},
    { question: "What is the term for Relax?",  correctAnswer: ["Shio"], type: "word" },
    { question: "What is the term for Turn?", correctAnswer: ["Tora"], type: "word" },
    { question: "What is the term for Turn to rear?",  correctAnswer: ["Dwee", "Ro", "Tora"], type: "word" },
    { question: "What is the term for Ready for Kick?",  correctAnswer: ["Bal", "Cha", "Gi", "Joon", "Bee"], type: "word" }
];


function Quiz() {
    
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [completed, setCompleted] = useState(false);

    // Shuffle an array
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    // Initialize the quiz with 5 random questions
    useEffect(() => {
        setSelectedQuestions(shuffleArray(questions).slice(0, 5));
    }, []);

    // Generate plausible distractors for numerical questions
    const generateNumberOptions = useCallback((correctAnswer) => {
        const range = correctAnswer < 50 ? 2 : correctAnswer < 200 ? 10 : 50;
        const offsets = [-range, range, -2 * range, 2 * range];
        return shuffleArray(
            offsets.map((offset) => correctAnswer + offset)
                .concat(correctAnswer)
                .filter((option) => option >= 0) // Remove negative values
        );
    }, []);

    // Generate options for the current question
    useEffect(() => {
        if (completed || selectedQuestions.length === 0) return; // Skip if quiz is completed or not initialized

        const currentQuestion = selectedQuestions[currentQuestionIndex];

        if (currentQuestion.type === "word") {
            const { correctAnswer } = currentQuestion;

            const numberOfExtraOptions = Math.floor(Math.random() * 4) + 3; // Randomly select between 3 and 6 options
            const extraOptions = shuffleArray(
                wordPool.filter((word) => !correctAnswer.includes(word))
            ).slice(0, numberOfExtraOptions);

            setOptions(shuffleArray([...correctAnswer, ...extraOptions]));
        } else if (currentQuestion.type === "number") {
            setOptions(generateNumberOptions(currentQuestion.correctAnswer));
        }

        setSelectedWords([]);
        setFeedback("");
    }, [currentQuestionIndex, completed, selectedQuestions, generateNumberOptions]);

    // Handle word or number selection
    const handleWordClick = (word) => {
        if (selectedQuestions[currentQuestionIndex].type === "word") {
            setSelectedWords([...selectedWords, word]);
            setOptions(options.filter((w) => w !== word));
        } else {
            // For numerical questions, allow only one selection
            setSelectedWords([word]);
        }
    };

    // Remove word from answer (only for word-based questions)
    const handleRemoveWord = (word) => {
        if (selectedQuestions[currentQuestionIndex].type === "word") {
            setSelectedWords(selectedWords.filter((w) => w !== word));
            setOptions([...options, word]);
        }
    };

    // Submit the answer
    const handleSubmit = () => {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correctAnswer;

        if (currentQuestion.type === "word") {
            if (arraysEqual(selectedWords, correctAnswer)) {
                handleCorrectAnswer();
            } else {
                setFeedback("Oops, that's not right. Try again!");
            }
        } else if (currentQuestion.type === "number") {
            if (selectedWords[0] === correctAnswer) {
                handleCorrectAnswer();
            } else {
                setFeedback("Oops, that's not right. Try again!");
            }
        }
    };

    // Handle correct answer
    const handleCorrectAnswer = () => {
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            setCompleted(true);
            setFeedback("Correct! 🎉 Congratulations, you completed the quiz!");
        } else {
            setFeedback("Correct! 🎉");
        }
    };

    // Helper function to compare arrays
    const arraysEqual = (arr1, arr2) => {
        return (
            arr1.length === arr2.length &&
            arr1.sort().every((value, index) => value === arr2.sort()[index])
        );
    };

    // Restart the quiz
    const handleRestart = () => {
        setSelectedQuestions(shuffleArray(questions).slice(0, 5));
        setCurrentQuestionIndex(0);
        setCompleted(false);
        setFeedback("");
    };

    // Move to the next question
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="sectionPage">
            <div className="quiz-container">
                {!completed ? (
                    selectedQuestions.length > 0 && (
                        <>
                            <h2 className="question">
                                {selectedQuestions[currentQuestionIndex].question}
                            </h2>
                            <div className="options">
                                {options.map((word, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleWordClick(word)}
                                        className={`word-button ${selectedQuestions[currentQuestionIndex].type === "number"
                                                ? `single-select ${selectedWords[0] === word ? "selected" : ""}`
                                                : ""
                                            }`}
                                    >
                                        {word}
                                    </button>
                                ))}
                            </div>
                            {selectedQuestions[currentQuestionIndex].type === "word" && (
                                <div className="answer-box">
                                    <h3>Your Answer:</h3>
                                    <div className="selected-words">
                                        {selectedWords.map((word, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleRemoveWord(word)}
                                                className="selected-word-button"
                                            >
                                                {word}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <button className="submit-button" onClick={handleSubmit}>
                                Submit Answer
                            </button>
                            {feedback && <div className="feedback">{feedback}</div>}
                            {feedback === "Correct! 🎉" &&
                                currentQuestionIndex < selectedQuestions.length - 1 && (
                                    <button className="next-button" onClick={handleNextQuestion}>
                                        Next Question
                                    </button>
                                )}
                        </>
                    )
                ) : (
                    <>
                        <h2>Congratulations! 🎉</h2>
                        <p>You’ve completed the quiz. Want to try again?</p>
                        <button className="restart-button" onClick={handleRestart}>
                            Start Again
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Quiz;