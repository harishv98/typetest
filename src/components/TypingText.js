import { useState } from "react"

export default function TypingText(props) {
  let words = props.text.split(" ");  
  let wordState = props.wordState;

  // console.log(wordState)
  return (
    <>
      {words.map((word, index) => {
        let 
          currWordClass = index === props.currIndx ? "word--current " : "",
          successClass = wordState[index] ? "word--success " : "",
          failedClass = wordState[index] === false ? "word--failure " : "";

        return (<span key={"word" + index} className={"test-word " + currWordClass + successClass + failedClass}> 
          {word} 
        </span>);
      })}
    </>
  )
}