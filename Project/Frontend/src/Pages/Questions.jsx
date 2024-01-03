// Questions.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "./data";
import { useNavigate } from "react-router-dom";
import {
  setCurrentIndex,
  setSelectedAnswer,
  incrementTotalAttempts,
  onSelect,
  updateTotalEarnPoints,
} from "../Redux/quizSlice";

export default function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    currentIndex,
    selectedAnswer,
    totalAttempts,
    totalEarnPoints,
  } = useSelector((state) => state.quiz);

  const handleSelect = (optionIndex) => {
    dispatch(setSelectedAnswer(optionIndex));
  };

  const onPrev = () => {
    if (currentIndex >= 1) {
      dispatch(setCurrentIndex(currentIndex - 1));
      dispatch(setSelectedAnswer(null));
    } else {
      alert("Wrong Click");
    }
  };

  const onNext = () => {
    dispatch(incrementTotalAttempts());

    if (currentIndex >= data.length - 1) {
      calculateQuizResult();
      navigate("/Result");
      return;
    }

    dispatch(setCurrentIndex(currentIndex + 1));
    dispatch(setSelectedAnswer(null));
  };

  const calculateQuizResult = () => {
    // Implement your logic to calculate result here
    const passingMarks = 70;
    const resultPercentage = (totalEarnPoints / data.length) * 100;
    const quizResult = resultPercentage >= passingMarks ? 'Passed' : 'Failed';

    dispatch(setQuizResult(quizResult));
  };

  return (
    <>
      <div className="container4 text-white">
        <h4 className="flex font-bold justify-center p-7 text-5xl italic underline">
          Simple Questions
        </h4>

        <div className="flex flex-col ml-24 mt-[3rem]">
          <h5 className="flex font-semibold mt-5 text-2xl italic">
            {data[currentIndex].question}
          </h5>

          <ul>
            {data[currentIndex].options.map((q, i) => (
              <li className="mt-2 flex" key={i}>
                <input
                  type="radio"
                  name="options"
                  id={`q${i}-options`}
                  onChange={() => handleSelect(i)}
                  checked={selectedAnswer === i}
                />
                <label
                  htmlFor={`q${i}-options`}
                  className="flex font-semibold italic text-lg ml-2"
                >
                  {q}
                </label>
              </li>
            ))}
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
  );
}
