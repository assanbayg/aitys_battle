import React from "react";

const Reply = ({ text }) => {
  const renderTextWithLineBreaks = () => {
    const lines = text.split("\n");
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className="bg-black bg-opacity-20 text-center text-xl">
      {renderTextWithLineBreaks()}
    </div>
  );
};

export default Reply;
