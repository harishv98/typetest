import { useEffect, useState } from "react";
import TypingContainer from "./TypingContainer";

export default function Main() {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("http://metaphorpsum.com/paragraphs/1/4", {
      "method": "GET"
    })
    .then(response => {
      return response.text()
    }).then(res => {
      setText(res);      
    })
  }, []);

  function setNewText() {
    fetch("http://metaphorpsum.com/paragraphs/1/4", {
      "method": "GET"
    })
    .then(response => {
      return response.text()
    }).then(res => {
      setText(res);      
    });
  }

  return (
    <main className="app-main">
      <section className="typing-container">
        <TypingContainer textData={text} setNewText={setNewText}/>
      </section>
    </main>
  )
}