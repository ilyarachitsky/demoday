import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import { Link } from "react-router-dom";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple";

function Tv() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };
  

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-white font-bold text-center mt-20">
          Game ended. 
          <br />
          <br />
          Your score is: 
          <br />
          <br />
          {score} / 10!
          <br />
          <Link to="./"><button className="bg-white p-5 mt-10 text-base text-black font-semibold rounded-md">Play again!</button></Link>
        </h1>
      ) : (
        <Questions
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white text-center mt-40">Loading...</h2>
    );

}


export default Tv;