import { getAllQuestions, postAttempts } from "api/api-services";
import Header from "components/Header";
import React, { useEffect, useState } from "react";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsData, setQuestionData] = useState([]);
  const [message, setMessage] = useState("");

  const handleGetData = async () => {
    const result = await getAllQuestions();
    if (result) {
      setQuestions(result?.data);
    }
  };

  const handleNext = async () => {
    if (questionIndex + 1 == questions.length) {
      const result = await postAttempts({ answers: questionsData });
      if (result) {
        setMessage(result?.data?.message);
      }
    } else {
      if (questionsData[questionIndex]?.answer_id) {
        setQuestionIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleChange = (answer_id, points) => {
    const copyQuestionsData = [...questionsData];
    copyQuestionsData[questionIndex] = {
      answer_id,
      points,
      total_points: questions[questionIndex]?.total_points,
      question_id: questions[questionIndex]?.id,
    };
    setQuestionData(copyQuestionsData);
  };

  return (
    <>
      <Header />
      {message != "" ? (
        <div class="absolute absolute-center max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div>
            <p class="mt-2 text-center text-gray-600">
              Here is your Personality Test Result
            </p>
            <h2 class="text-gray-800 text-center text-3xl font-semibold">
              {message}
            </h2>
          </div>
        </div>
      ) : (
        <div className="absolute absolute-center py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div>
            <div className="mb-5">
              <span className="font-bold"> Q{questionIndex + 1}:</span>{" "}
              {questions[questionIndex]?.question_text}
            </div>
            {questions[questionIndex]?.answers.map(
              ({ answer_text, id, point }, index) => (
                <div className="mb-2">
                  <input
                    type="radio"
                    onChange={() => handleChange(id, point)}
                    name="question_text"
                    id={index}
                    checked={questionsData[questionIndex]?.answer_id == id}
                  />
                  <label for={index}> {answer_text}</label>
                </div>
              )
            )}
            {questionIndex < questions.length && (
              <button
                disabled={!questionsData[questionIndex]?.answer_id}
                onClick={handleNext}
                className={`m-auto ${
                  !questionsData[questionIndex]?.answer_id
                    ? "opacity-50"
                    : "opacity-100"
                } block bg-blue m-20 text-white font-bold py-2 px-4 rounded`}
              >
                {questionIndex + 1 == questions.length ? "Submit" : " Next"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Test;
