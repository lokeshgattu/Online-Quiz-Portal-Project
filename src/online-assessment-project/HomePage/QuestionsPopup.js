// QuestionsPopup.js
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./QuestionsPopup.css";

const QuestionsPopup = ({ open, onClose }) => {
  const questions = [
    {
      id: 1,
      question: "What is the extension of document type file?",
      options: [".doc", ".txt", ".pdf", ".png"],
      answer: ".doc",
    },
    {
      id: 2,
      question: "Which property is used for changing the text colour in css?",
      options: ["text-colour", "background-colour", "color", "font-color"],
      answer: "color",
    },
    // Add more questions as needed
  ];

  return (
    <Popup open={open} onClose={onClose} modal>
      <div className="popup-content">
        <h2>Demo Test Questions</h2>
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Popup>
  );
};

export default QuestionsPopup;
