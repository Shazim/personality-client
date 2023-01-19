import { getAllQuestions, postAttempts } from "api/api-services";
import React, { useEffect, useState } from "react";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsData, setQuestionData] = useState([]);
  const [message, setMessage] = useState("");
  const handleGetData = async () => {
    const result = await getAllQuestions();
    if (result) {
      console.log("result", result);
      setQuestions(result?.data);
    }
  };

  const handleNext = async () => {
    if (questionIndex + 1 == questions.length) {
      const result = await postAttempts({ answers: questionsData });
      if (result) {
        console.log(result?.data?.message, "jdjjd");
        setMessage(result?.data?.message);
      }
    } else {
      setQuestionIndex((prev) => prev + 1);
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
  console.log(questionsData, "snnsns");

  return (
    <>
      {message != "" ? (
        <div>{message}</div>
      ) : (
        <div>
          <div>{questions[questionIndex]?.question_text}</div>
          {questions[questionIndex]?.answers.map(
            ({ answer_text, id, point }, index) => (
              <div>
                <input
                  type="radio"
                  onChange={() => handleChange(id, point)}
                  name="question_text"
                  id={index}
                  value="Bike"
                />
                <label for={index}> {answer_text}</label>
              </div>
            )
          )}
          {questionIndex < questions.length && (
            <button
              onClick={handleNext}
              className="bg-blue m-20 text-white font-bold py-2 px-4 rounded"
            >
              {questionIndex + 1 == questions.length ? "Submit" : " Next"}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Test;
