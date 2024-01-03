import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

// Add chatgpt one
import { updateQuizResult } from '../Redux/quizAction';


const QuestionPage = () => {
    const dispatch = useDispatch();
    const [quizResult, setQuizResult] = useState({
        totalAttempts: 0,
        earnPoints: 0,
        resultStatus: false,
        answers: [], // Store correctness of each answer
    });
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false); // New state for answer correctness
    const qustionsArray = [
        {
            id: 1,
            question: "1. What is the capital of France?",
            options: [
                'Rome',
                'Paris',
                'Madrid'
            ],
            currentAnswer: "Rome"
        },
        {
            id: 2,
            question: "2. What is the square root of 144?",
            options: [
                '12',
                '10',
                '14'
            ],
            currentAnswer: "10"
        },
        {
            id: 3,
            question: "3. What is the largest planet in our solar system?",
            options: [
                'Earth',
                'Mars',
                'Jupiter'
            ],
            currentAnswer: "Earth"
        },
        {
            id: 4,
            question: "4. In which year did world war ll end?",
            options: [
                '1943',
                '1950',
                '1945'
            ],
            currentAnswer: "1943"
        },
        {
            id: 5,
            question: "5. What is the capital of Japan?",
            options: [
                'Beijing',
                'Seoul',
                'Tokyo'
            ],
            currentAnswer: "Beijing"
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setIsCorrect(false);
        } else {
            alert("This is the first question");
        }
    };

    const onNext = () => {
        if (currentIndex < qustionsArray.length - 1) {
            if (currentAnswer === "") {
                console.log("Please give an answer");
            } else {
                const updatedQuizResult = {
                    totalAttempts: quizResult.totalAttempts + 1,
                    resultStatus: true,
                    earnPoints: isCorrect ? quizResult.earnPoints + 10 : quizResult.earnPoints,
                    answers: [...quizResult.answers, isCorrect],
                };
                setQuizResult(updatedQuizResult);
                dispatch(updateQuizResult(updatedQuizResult));
                setCurrentIndex((prev) => prev + 1);
                setCurrentAnswer("");
                setIsCorrect(false);
            }
        } else {
            handleResultNavigation();
        }
    };

    const handleCheckAnswer = (answer, correctAns) => {
        if (answer === correctAns) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setCurrentAnswer(answer);
    };

    const navigate = useNavigate();
    const handleResultNavigation = () => {
        // Navigate to result page or perform any other actions
        console.log("Navigate to result page");
        navigate("/Result")
    };
    return (
        <>
            <div className="container4 text-white opacity-90">
                <h4 className="flex font-bold justify-center p-7 text-5xl italic underline">
                    Simple Questions
                </h4>

                <div className="flex flex-col ml-24 mt-[3rem]">
                    <h5 className="flex font-semibold mt-5 text-2xl italic">
                        {qustionsArray[currentIndex]?.question}
                    </h5>

                    <ul>
                        {
                            qustionsArray[currentIndex].options.map(option => {
                                return <li className="mt-2 flex" key={option}>
                                    <input
                                        id={option}
                                        type="radio"
                                        name="options"
                                        onChange={() => handleCheckAnswer(option, qustionsArray[currentIndex].currentAnswer)}

                                    />
                                    <label
                                        htmlFor={option}
                                        className="flex font-semibold italic text-lg ml-2"
                                    >
                                        {option}
                                    </label>
                                </li>
                            })
                        }

                    </ul>

                    <div className="flex gap-[12rem] mt-12">
                        <button
                            className="prev mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-800 shadow-xl shadow-green-300"
                            onClick={onPrev}
                        >
                            Previous
                        </button>

                        <button
                            className="next mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-800 shadow-xl shadow-green-300"
                            onClick={onNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionPage