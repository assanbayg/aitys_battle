import React from "react";

const Reply = ({ text }) => {
  const renderTextWithLineBreaks = () => {
    const lines = text.split("\n");
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className="rounded-xl bg-blue-950 bg-opacity-20 p-5 text-center text-xl">
      {renderTextWithLineBreaks()}
    </div>
  );
};

export default Reply;
