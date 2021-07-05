import {useState, useEffect, Fragment } from "react";
import useTimer from "../hooks/timer";
import "../styles/TypingContainer.css";
import TypingText from "./TypingText";

const INITIAL_SECONDS = 60;

export default function TypingContainer(props) {
  const {start, stop, isRunning, seconds, setTime} = useTimer(INITIAL_SECONDS);
  const [word, setWord] = useState("");
  const [wpm, setWpm] = useState(0);
  const [currIndx, setCurrIndx] = useState(0);
  const [textArr, setTextArr] = useState(props.textData.split(" "));

  let initalWordState = props.textData.split(" ");
  const [wordState, setWordState] = useState(new Array(initalWordState.length));

  useEffect(() => {
    setTextArr(props.textData.split(" "));
    if(wordState.length !== textArr.length) {
      setWordState(new Array(textArr.length));
    }
  }, [props.textData, wordState, setTextArr, textArr.length]);

  useEffect(() => {
    console.log(seconds);
    let elapsed = INITIAL_SECONDS - seconds;
    let totalPassedWords = wordState.filter(v => v).length;  

    if(isRunning) {
      setWpm(Math.floor(totalPassedWords / (elapsed / 60)));
    }
  }, [isRunning, seconds, wordState]);

  let inputChange = function(e) {
    let value = e.target.value;
    
    if(value.charAt(value.length-1) === " ") {
      if(value.length > 1 && value.charAt(value.length-1) === " ") {
        setWordState((v) => {
          v[currIndx] = textArr[currIndx] === word.slice(0, word.length);
          return v;
        });

        setCurrIndx((v) => v + 1);
      }

      value = "";
    }
    setWord(value);

    if(!isRunning) {
      start();
    }
  }

  function reset() {
    setWpm(0);
    setCurrIndx(0);

    stop();
    props.setNewText();
  }

  return (
    <Fragment>
      <div className="test-paragraph">
        <TypingText text={props.textData} word={word} currIndx={currIndx} setWordState={setWordState} wordState={wordState}/>
      </div>

      <div className="flex-content test-option__groupings">
        <input className="test-option__input" type="text" value={word} onChange={inputChange}/>
        
        <div className="test-option__wpm">{wpm} WPM</div>

        <button className="test-option__reset" onClick={reset}>Reset</button>

        {isRunning ? seconds : "Not started"}
      </div>
    </Fragment>
  )
}