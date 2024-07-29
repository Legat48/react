import { useEffect, useRef, useState } from "react";
import "../styles.css";

const InputExample = () => {
  const updates = useRef(0);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  useEffect(() => {
    updates.current++;
  });

  return (
    <div>
      <input
        value={text}
        className="input"
        placeholder="Write somethig"
        onChange={onChange}
      />
      <Updates updates={updates.current} />
      <div className="flex">
        <Tile />
        <Tile />
      </div>
    </div>
  );
};

const Updates = ({ updates }) => {
  return <p className="text">{`Updates count: ${updates}`}</p>;
};

const Tile = ({ updates }) => {
  let eventUpdates = useRef(0);
  return (
    <div className="component">
      <Updates updates={eventUpdates.current++} />
    </div>
  );
};

export { InputExample };
