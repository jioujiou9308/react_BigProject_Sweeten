import React from "react";

const MessageRow = ({ comingFrom, msg }) => {
  const current = new Date();
  return (
    <>
      {msg &&
        msg.map((inner) => (
          <div
            key={inner}
            className={`p-1 rounded-lg my-1 px-3 border border-line shadow max-w-max  ${comingFrom}`}
          >
            {inner}
          </div>
        ))}
      <p className={`text-xs opacity-50 note ${comingFrom} bg-white max-w-max`}>
        {`${current.getHours()}:${current.getMinutes()}`}
      </p>
    </>
  );
};

export default MessageRow;
