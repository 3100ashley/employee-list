import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState("");
    const navigate = useNavigate();
    // no dependency array -> update for every state change
    // empty dependency array -> updates only once
    //passing in data -> only executes when those state variables  are
    return (
      <form
        className="flex space-between space-x-2 max-w-[300px]"
        onSubmit={() => {
          navigate("/dictionary/" + word);
        }}
      >
        <input
        className="shrink min-w-0 px-2 py-1 rounded"
          placeholder="Dinosaur"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        ></input>
        <button className="mx-auto block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">Search</button>
      </form>
    );
}