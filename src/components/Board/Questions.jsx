import React from "react";

const Questions = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white text-blue-500 font-bold p-10 shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-white";
          const textColor = showAnswers ? "text-white" : "text-blue-500";
          return (
            <button
              
              className={`${bgColor} ${textColor} p-4 font-semibold shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button
          onClick={handleNextQuestion}
          className={`ml-auto p-4 bg-blue-800 text-white font-semibold shadow mt-6 rounded-md`}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questions;