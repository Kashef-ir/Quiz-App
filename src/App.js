import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          questionText: "What is capital of Iran?",
          answerOptions: [
            { answerText: "Tehran", isCorrect: true },
            { answerText: "Baghdad", isCorrect: false },
            { answerText: "Kabul", isCorrect: false },
            { answerText: "Shiraz", isCorrect: false },
          ],
        },
        {
          questionText: "What is the first season?",
          answerOptions: [
            { answerText: "Spring", isCorrect: true },
            { answerText: "Summer", isCorrect: false },
            { answerText: "Fall", isCorrect: false },
            { answerText: "Winter", isCorrect: false },
          ],
        },
        {
          questionText: "What is the biggest continent?",
          answerOptions: [
            { answerText: "Europe", isCorrect: false },
            { answerText: "America", isCorrect: false },
            { answerText: "Asia", isCorrect: true },
            { answerText: "Africa", isCorrect: false },
          ],
        },
        {
          questionText: "What is the most valuable metal?",
          answerOptions: [
            { answerText: "Copper", isCorrect: false },
            { answerText: "Gold", isCorrect: true },
            { answerText: "Silver", isCorrect: false },
            { answerText: "Bronze", isCorrect: false },
          ],
        },
      ],
      questionNumber: 0,
      correctAnswers: 0,
      showScore: false,
    };
  }

  // this func, checks the correct answer and goes to the next question
  checkAnswer = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1,
      }));
    }

    this.setState((prevState) => {
      const nextQuestion = prevState.questionNumber + 1;
      if (nextQuestion >= this.state.questions.length) {
        return { showScore: true };
      } else {
        return { questionNumber: nextQuestion };
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="content">

          <div className={`question_box ${!this.state.showScore ? "show" : ""}`}>
            <h3 className="question_text">
              {this.state.questions[this.state.questionNumber].questionText}
            </h3>
            <div className="question_options">
              {this.state.questions[
                this.state.questionNumber
              ].answerOptions.map((option, index) => (
                <span
                  className="question_option"
                  onClick={() => this.checkAnswer(option.isCorrect)}
                  key={index}
                >
                  {option.answerText}
                </span>
              ))}
            </div>
          </div>

          <div className={`result ${this.state.showScore ? "show" : ""}`}>
            You got {this.state.correctAnswers} out of{" "}
            {this.state.questions.length}
          </div>
        </div>
      </div>
    );
  }
}
