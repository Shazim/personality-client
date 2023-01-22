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
        <div className="font-bold absolute absolute-center shadow-3xl p-20">
          {message}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-124">
          <div>
            <div className="shadow-3xl p-20 mb-20 ">
              <span className="font-bold"> Q{questionIndex + 1}:</span>{" "}
              {questions[questionIndex]?.question_text}
            </div>
            {questions[questionIndex]?.answers.map(
              ({ answer_text, id, point }, index) => (
                <div className="shadow-3xl p-20 mb-5">
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
