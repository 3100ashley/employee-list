import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");

  useEffect(() => {
    console.log("State updated " + word);
  },[word]);

  useEffect(() => {
    console.log("State updated " + word2);
  },[word2]);
  
  // no dependency array -> update for every state change
  // empty dependency array -> updates only once
  //passing in data -> only executes when those state variables  are
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      ></input>
      <h2>Let's get the definition for {word}</h2>

      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      ></input>
      <h2>Let's get the definition for {word2}</h2>
    </>
  );
}
