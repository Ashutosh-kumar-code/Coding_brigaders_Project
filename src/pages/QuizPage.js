import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuizPage = () => {
  const questiondata = [
    {
      question: "Ad hoc polymorphism is ____________.",
      answer: [
        "Method Overloading",
        "Method Overriding",
        "Subclassing polymorphism",
        "Dynamic binding",
      ],
    },
    {
      question: "What happens when a throw statement is executed inside a try block in Java? ",
      answer: [
        "The program immediately stops execution of the current method and returns to the caller.",
        "Control is immediately transferred to the corresponding catch block that can handle the exception.",
        "An error is generated if no corresponding catch block exists.",
        "The program will compile but throw a runtime exception during execution if no catch block handles it.",
      ],
    },
    {
      question: "Which component is used to compile, debug and execute the java programs?",
      answer: [
        "JRE",
        "JIT",
        "JDK",
        "JVM",
      ],
    },
    {
      question: "Which one of the following is not a Java feature?",
      answer: [
        "Object-oriented",
        "Use of pointers",
        "Portable",
        "Dynamic and Extensible",
      ],
    },
    {
      question: "Which of these cannot be used for a variable name in Java?",
      answer: [
        "Identifier & keyword",
        "Identifier",
        "keyword",
        "none of the mentioned",
      ],
    },
    
  ];

  return (
    <>
      <Header />

      <div className="quizpage_sectionmain">
        <div className="container">
          <h2>Quiz For You</h2>
          {questiondata.map((value, index) => {
            return (
              <div className="questionone1" key={index}>
                <h6>Que{index+1}. {value.question} </h6>
                {value.answer.map((v, i) => {
                  return (
                    <div className="radiois_flex" key={i}>
                      <input type="radio" id={index+""+i} name={index} />
                      <label htmlFor={index+""+i}>{v} </label>
                    </div>
                  );
                })}
              </div>
            );
          })}

<div className="quiz_submit">

<button className="button_mainall">Submit</button>
</div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuizPage;
